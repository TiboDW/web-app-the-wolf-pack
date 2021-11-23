import React from "react";
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { deleteMovieByid } from "../api/movies";
import {getAllMovies} from "../api/movies";


const AdminMovie = ({movie, setMovies}) => {

    const { getAccessTokenSilently } = useAuth0();
    

    const deleteMovie = async () => {
        const token = await getAccessTokenSilently();
        const status = await deleteMovieByid(movie._id, token);
        if (status === 204){
          const movies = await getAllMovies();
          setMovies([movies]);
        }
    }
    
    
    return (
        <div class="ml-20 mb-5">
        <img
          class="h-72 w-auto"
          src={movie.img_url}
          alt="Workflow"
        />
        <p class="mt-2 mb-2 w-44 truncate text-center">
          {movie.titel}
        </p>
        <Link to={`/admin/films/${movie._id}`}>
          <button class="shadow font-bold py-2 px-4 rounded hover:bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </button>
        </Link>
        <button class="ml-2 shadow font-bold py-2 px-4 rounded hover:bg-gray-50" onClick={deleteMovie}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    )

}

export default AdminMovie;