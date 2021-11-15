import React from "react";
import SidebarAdmin from "../components/SidebarAdmin";

export const AdminFilmsToevoegen = () => {
  return (
    <div className="App">
      <div class="container mx-auto px-6 mt-16 text-left text-color-footer">
        Films
        <div class="border-t-2 border-gray-300 flex flex-wrap">
          <SidebarAdmin />
          <div class="grid grid-cols-4 gap-2 place-content-start mt-10 overflow-auto no-scroll h-96 w-auto">
            <div class="ml-20">
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

            <div class="font-bold ml-48">
            <button class="shadow font-bold py-2 px-4 rounded hover:bg-gray-50">Toevoegen</button>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
};
export default AdminFilmsToevoegen;
