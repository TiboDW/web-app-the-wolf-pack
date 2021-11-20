import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";

export const Film = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
   
  return (
    <div class="App">
      <div class="container mx-auto px-6 mt-16 text-left text-color-footer">
        Film
        <div class=" border-t-2 border-gray-300 flex flex-wrap">
        <div class="grid grid-cols-4 gap-2 place-content-start mt-10 overflow-auto no-scroll h-96 w-auto">
            <div class="font-bold">
              <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              />
            </div>
            <div class="ml-1 font-bold">
            <p class="">Venom: Let there be carnage</p>
              <br />
              <p class="">
                Regisseur:
              </p>
              <p class="">
                Cast:
              </p>
              <p class="">
                Genre:
              </p>
              <p class="">
                Duur:
              </p>
              <br />
              <p class="">
                Beschrijving:
              </p>
            </div>

            <div class="ml-32 font-bold">
            <p class="">Tickets</p>
              <br />
              <p>
                1/11:
                <button class="ml-2 shadow font-bold py-2 px-4 rounded hover:bg-gray-50">19:00</button>
              </p>
              <br />
              <p>
                2/11:
                <button class="ml-2 shadow font-bold py-2 px-4 rounded hover:bg-gray-50">19:00</button>
              </p>
              <br />
              <p>
                3/11:
                <button class="ml-2 shadow font-bold py-2 px-4 rounded hover:bg-gray-50">19:00</button>
              </p>
              <br />
              <p>
                4/11:
                <button class="ml-2 shadow font-bold py-2 px-4 rounded hover:bg-gray-50">19:00</button>
              </p>
              <br />
              <p>
                5/11:
                <button class="ml-2 shadow font-bold py-2 px-4 rounded hover:bg-gray-50">19:00</button>
                <button class="ml-2 shadow font-bold py-2 px-4 rounded hover:bg-gray-50">21:00</button>
              </p>
              <br />
            </div>

            <div class="font-bold">
              <br />
              <br />
              <p>
                6/11:
                <button class="ml-2 shadow font-bold py-2 px-4 rounded hover:bg-gray-50">19:00</button>
                <button class="ml-2 shadow font-bold py-2 px-4 rounded hover:bg-gray-50">21:00</button>
              </p>
              <br />
              <p>
                7/11:
                <button class="ml-2 shadow font-bold py-2 px-4 rounded hover:bg-gray-50">16:00</button>
                <button class="ml-2 shadow font-bold py-2 px-4 rounded hover:bg-gray-50">19:00</button>
                <button class="ml-2 shadow font-bold py-2 px-4 rounded hover:bg-gray-50">21:00</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Film;
