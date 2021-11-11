require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const Movie = require("./DB/movie");
const {movies} = require("./DB/data.js");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const jwtAuthz = require('express-jwt-authz');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

const checkToken = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri:  `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

const checkForAdminPermissions = jwtAuthz(['read:movies', 'create:movies', 'update:movies', 'delete:movies'],{
    customScopeKey: 'permissions',
    checkAllScopes: true
});

const URI = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@focus.qwq5l.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(db => {
            Movie.find({}).then((res) => {
                if (res.length === 0) {
                    movies.forEach((movie) => {
                        movie.save().then(res => console.log("Movie is saved"));
                    });
                }
                else {
                    console.log("Database is not empty");
                    console.log(`${res.length} documents found`);
                }
            });
        })
        .then(res => app.listen(port, () => console.log(`Listening on port ${port}`)))
        .catch(err => console.log(err));

// PUBLIC ROUTES
app.get("/movies", async(req,res) => {
    res.send(await Movie.find({}));
});

app.get("/movies/:id", async(req,res) => {
   res.send(await Movie.findById(req.params.id));
});

// PROTECTED ROUTES (only for admins)
app.post("/movies",checkToken, checkForAdminPermissions, async(req,res) => { 
    res.send(await Movie.create(req.body));
});

app.put('/movies/:id',checkToken, checkForAdminPermissions, async(req,res) => {
    res.send(await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true}));
});

app.delete("/movies/:id",checkToken, checkForAdminPermissions, async(req,res) => {
   res.send(await Movie.findByIdAndDelete(req.params.id));
});

