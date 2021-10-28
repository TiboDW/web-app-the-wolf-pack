const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const {getAllMovies, getMovieDetails} = require("./API/movies.js");

// GET all movies
app.get("/movies", async(req,res) => {
   try {
        const results = await getAllMovies();
        res.status(200).send(results);
    }
   catch(err){
        res.status(500).send("Internal Server error");
   }
})

// GET movie by id
app.get("/movies/:id", async(req,res) => {
    try {
        const details = await getMovieDetails(req.params.id);
        res.status(200).send(details);
    }
    catch(err){
        res.status(404).send("NOT FOUND");
    }
 })

app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});
