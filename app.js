require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const Movie = require("./DB/movie");
const {movies} = require("./DB/data.js");

const mongoose = require("mongoose");

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

// GET all movies
app.get("/movies", async(req,res) => {
    res.send(await Movie.find({}));
});

// GET movie by id
app.get("/movies/:id", async(req,res) => {
   res.send(await Movie.findById(req.params.id));
});

// DELETE movie by id
app.delete("/movies/:id", async(req,res) => {
   res.send(await Movie.findByIdAndDelete(req.params.id));
});

