import React from "react";
import SidebarAdmin from "../components/SidebarAdmin";

export const AdminFilms = () => {
  return (
    <div className="App">
      <div class="container mx-auto px-6 mt-16 text-left text-color-footer">
        Films
        <div class="border-t-2 border-gray-300 flex flex-wrap">
          <SidebarAdmin />
          <div class="mt-2 ml-20 pr-20 float-right w-auto h-auto">
            <input type="text" class="h-10 ml-10 w-full pr-8 pl-5 rounded shadow focus:outline-none text-center" placeholder="Zoek films ..." />
            <div class="grid grid-cols-4 gap-2 place-content-start mt-10 overflow-auto no-scroll h-96 w-auto">
            <div class="ml-20">
              <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              />
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
            <div class="ml-20">
              <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              />
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
            <div class="ml-20">
              <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              />
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
            <div class="ml-20">
              <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              />
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
            <div class="ml-20">
              <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              />
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
            <div class="ml-20">
              <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              />
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
            <div class="ml-20">
              <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              />
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
            <div class="ml-20">
              <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              />
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
            <div class="ml-20">
              <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              />
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
            <div class="ml-20">
              <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              />
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
            <div class="ml-20">
              <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              />
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminFilms;
