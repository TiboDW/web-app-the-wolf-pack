import React, {useState, useEffect} from "react";
import SidebarAdmin from "../components/SidebarAdmin";
import { Link } from "react-router-dom";
import AdminMovie from "../components/AdminMovie";
import { getAllMovies } from "../api/movies";	

export const AdminFilms = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then(movies => setMovies(movies));
  }, [movies]);


  return (
    <div className="App font-bold">
      <div class="container mx-auto px-6 mt-16 text-left text-color-footer flex-grow">
        <div class=" border-gray-300 flex flex-row">
          <SidebarAdmin />
          <div class="mt-2 ml-20 pr-20 float-right w-auto h-auto">
          <Link to="/admin/films/toevoegen" ><button class="shadow font-bold py-2 px-4 rounded hover:bg-gray-50 w-full text-center">Film toevoegen</button></Link>
            <div class="grid grid-cols-4 gap-2 place-content-start mt-10 overflow-auto w-full">
              {
                movies.map(movie => <AdminMovie movie={movie} key={movie._id} setMovies={setMovies}/>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminFilms;
