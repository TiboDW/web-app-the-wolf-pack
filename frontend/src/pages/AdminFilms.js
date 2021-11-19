import React from "react";
import SidebarAdmin from "../components/SidebarAdmin";
import { Link } from "react-router-dom";

export const AdminFilms = () => {
  return (
    <div className="App font-bold">
      <div class="container mx-auto px-6 mt-16 text-left text-color-footer">
        Films
        <div class="border-t-2 border-gray-300 flex flex-wrap">
          <SidebarAdmin />
          <div class="mt-2 ml-20 pr-20 float-right w-auto h-auto">
          <Link to="/admin/films/toevoegen" ><button class="shadow font-bold py-2 px-4 rounded hover:bg-gray-50 w-full text-center">Film toevoegen</button></Link>
            <div class="grid grid-cols-4 gap-2 place-content-start mt-10 overflow-auto no-scroll h-96">
              <div class="ml-20 mb-5">
                <img
                  class="h-72 w-auto"
                  src="/images/Venom2.jpg"
                  alt="Workflow"
                />
                <p class="mt-2 mb-2 w-44 truncate text-center">
                  Venom: Let there be carnage
                </p>
                <Link to="/admin/films/1">
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
                <button class="ml-2 shadow font-bold py-2 px-4 rounded hover:bg-gray-50">
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
              <div class="ml-20 mb-5">
                <img
                  class="h-72 w-auto"
                  src="/images/Venom2.jpg"
                  alt="Workflow"
                />
                <p class="mt-2 mb-2 w-44 truncate text-center">
                  Venom: Let there be carnage
                </p>
                <Link to="/admin/films/1">
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
                <button class="ml-2 shadow font-bold py-2 px-4 rounded hover:bg-gray-50">
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
              <div class="ml-20 mb-5">
                <img
                  class="h-72 w-auto"
                  src="/images/Venom2.jpg"
                  alt="Workflow"
                />
                <p class="mt-2 mb-2 w-44 truncate text-center">
                  Venom: Let there be carnage
                </p>
                <Link to="/admin/films/1">
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
                <button class="ml-2 shadow font-bold py-2 px-4 rounded hover:bg-gray-50">
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
              <div class="ml-20 mb-5">
                <img
                  class="h-72 w-auto"
                  src="/images/Venom2.jpg"
                  alt="Workflow"
                />
                <p class="mt-2 mb-2 w-44 truncate text-center">
                  Venom: Let there be carnage
                </p>
                <Link to="/admin/films/1">
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
                <button class="ml-2 shadow font-bold py-2 px-4 rounded hover:bg-gray-50">
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
              <div class="ml-20 mb-5">
                <img
                  class="h-72 w-auto"
                  src="/images/Venom2.jpg"
                  alt="Workflow"
                />
                <p class="mt-2 mb-2 w-44 truncate text-center">
                  Venom: Let there be carnage
                </p>
                <Link to="/admin/films/1">
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
                <button class="ml-2 shadow font-bold py-2 px-4 rounded hover:bg-gray-50">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminFilms;
