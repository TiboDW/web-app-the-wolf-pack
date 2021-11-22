import React from "react";
import SidebarAdmin from "../components/SidebarAdmin";

export const AdminInstellingen = () => {
  return (
    <div className="App font-bold flex flex-grow mb-3 text-color-footer">
      <SidebarAdmin />
      <form class="w-auto max-w-sm ml-10 mt-2">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-color-label md:text-left mb-1 md:mb-0 pr-4"
              for="inline-full-cast"
            >
              Foto
            </label>
          </div>
          <div class="md:w-2/3 text-center">
            <label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 block m-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span class="mt-2 text-base leading-normal">Upload een foto</span>
              <input
                class="py-2 px-4 text-gray-700 leading-tight focus:outline-none ml-2 hidden"
                id="inline-full-cast"
                type="file"
                accept="img/*"
                required
              />
            </label>
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-color-label md:text-left mb-1 md:mb-0 pr-4"
              for="inline-full-title"
            >
              Voornaam
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="border-2 border-gray-200 rounded w-auto py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ml-2"
              id="inline-full-title"
              type="text"
              required
            />
          </div>

          <div class="md:w-1/3 ml-10">
            <label
              class="block text-color-label md:text-left mb-1 md:mb-0 pr-4"
              for="inline-full-director"
            >
              Achternaam
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="border-2 border-gray-200 rounded w-auto py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ml-2"
              id="inline-full-director"
              type="text"
              required
            />
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <button class="md:w-2/3 shadow font-bold py-2 px-4 rounded hover:bg-gray-50 w-auto float-right">
            Aanpassingen opslaan
          </button>
        </div>
      </form>
    </div>
  );
};
export default AdminInstellingen;
