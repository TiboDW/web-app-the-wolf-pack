import React from "react";
import SidebarAdmin from "../components/SidebarAdmin";

export const AdminFilmsAanpassen = () => {
  return (
    <div className="App font-bold">
      <div class="container mx-auto px-6 mt-16 text-left text-color-footer">
        Films
        <div class="border-t-2 border-gray-300 flex flex-wrap">
          <SidebarAdmin />
          <div class="grid grid-cols-3 gap-2 place-content-start mt-5 overflow-auto no-scroll h-96 w-auto">
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
              <form class="w-full max-w-sm">
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-color-label md:text-left mb-1 md:mb-0 pr-4"
                      for="inline-full-title"
                    >
                      Titel
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ml-2"
                      id="inline-full-title"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-color-label md:text-left mb-1 md:mb-0 pr-4"
                      for="inline-full-director"
                    >
                      Regisseur
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ml-2"
                      id="inline-full-director"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-color-label md:text-left mb-1 md:mb-0 pr-4"
                      for="inline-full-cast"
                    >
                      Cast
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ml-2"
                      id="inline-full-cast"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-color-label md:text-left mb-1 md:mb-0 pr-4"
                      for="inline-full-genre"
                    >
                      Genre
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ml-2"
                      id="inline-full-genre"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-color-label md:text-left mb-1 md:mb-0 pr-4"
                      for="inline-full-time"
                    >
                      Duur
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ml-2"
                      id="inline-full-time"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-color-label md:text-left mb-1 md:mb-0 pr-4"
                      for="inline-description"
                    >
                      Beschrijving
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <textarea
                      class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ml-2"
                      id="inline-description"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-color-label md:text-left mb-1 md:mb-0 pr-4"
                      for="inline-full-cast"
                    >
                      Poster
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
                      <span class="mt-2 text-base leading-normal">
                        Upload een poster
                      </span>
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
              </form>
            </div>

            <div class="font-bold ml-48">
              <button class="shadow font-bold py-2 px-4 rounded hover:bg-gray-50">
                Aanpassen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminFilmsAanpassen;
