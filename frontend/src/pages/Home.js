import React, {useState, useEffect} from "react";
import { getAllMovies } from "../api/movies";
import Movie from "../components/Movie";

export const Home = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then(movies => setMovies(movies));
  }, []);


  return (
    <div className="App font-bold flex-grow mb-3 text-color-footer">
      <div class="grid grid-cols-4 gap-2 place-content-start mt-10  overflow-auto w-auto">
        {
          movies.filter(movie => movie.isReleased).map(movie => <Movie movie={movie} key={movie._id}/>)
        }
      </div>
    </div>
  );
};

export default Home;
