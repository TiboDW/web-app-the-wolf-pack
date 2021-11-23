import React from "react";
import {Link} from "react-router-dom";

const Movie = ({ movie }) => {
    return (
        <div className="ml-20 mb-5">
        <Link to={`/movies/${movie._id}`}>  <img
            className="h-72 w-auto"
            src={movie.img_url}
            alt="Workflow"
            height="20%"
            width="20%"
        /></Link>
        <p className="w-44 truncate">{movie.titel}</p>
        </div>
    );
}


export default Movie;