import React, {useState, useEffect} from 'react';
import { getAllMovies } from '../api/movies';
import Movie from '../components/Movie';

export const WordtVerwacht = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then(movies => setMovies(movies));
  }, [movies]);

    return (
        <div className="App font-bold flex-grow">
        <div class="container mx-auto px-6 mt-16 text-left text-color-footer">
          <div class="border-gray-300 flex flex-col items-left">
            <div class="grid grid-cols-4 gap-2 place-content-start mt-10 overflow-auto w-auto">
              {
                movies.filter(movie => movie.isReleased === false).map(movie => <Movie movie={movie} key={movie._id}/>)
              }
            </div>
          </div>
        </div>
      </div>
    )
}
export default WordtVerwacht;
