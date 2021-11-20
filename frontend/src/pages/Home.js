import React, {useState, useEffect} from "react";
import { getAllMovies } from "../api/movies";
import Movie from "../components/Movie";

export const Home = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then(movies => setMovies(movies));
  }, [movies]);


  return (
    <div className="App font-bold">
      <div class="container mx-auto px-6 mt-16 text-left text-color-footer">
        Home
        <div class="border-t-2 border-gray-300 flex flex-col items-left h-auto w-auto">
          <div class="grid grid-cols-4 gap-2 place-content-start mt-10 overflow-auto no-scroll h-96 w-auto">
            {
              movies.map(movie => <Movie movie={movie} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
