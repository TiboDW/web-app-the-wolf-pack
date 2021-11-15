import React from "react";

export const Weekoverzicht = () => {
  return (
    <div className="App">
      <div class="container mx-auto px-6 mt-16 text-left text-color-footer">
        Weekoverzicht
        <div class=" border-t-2 border-gray-300 flex flex-col items-left">
          <div class="grid grid-cols-7 gap-2 place-content-start mt-2">
            <button
              class="shadow focus:shadow-outline focus:outline-none bg-gray-50 text-color-label font-bold py-2 px-4 rounded ml-2"
              type="button" aria-current="page"
            >
              Maandag 1/11
            </button>
            <button
              class="shadow focus:shadow-outline focus:outline-none hover:bg-gray-50 text-color-label font-bold py-2 px-4 rounded  ml-2"
              type="button"
            >
              Dinsdag 1/11
            </button>
            <button
              class="shadow focus:shadow-outline focus:outline-none hover:bg-gray-50 text-color-label font-bold py-2 px-4 rounded  ml-2"
              type="button"
            >
              Woensdag 1/11
            </button>
            <button
              class="shadow focus:shadow-outline focus:outline-none hover:bg-gray-50 text-color-label font-bold py-2 px-4 rounded  ml-2"
              type="button"
            >
              Donderdag 1/11
            </button>
            <button
              class="shadow focus:shadow-outline focus:outline-none hover:bg-gray-50 text-color-label font-bold py-2 px-4 rounded  ml-2"
              type="button"
            >
              Vrijdag 1/11
            </button>
            <button
              class="shadow focus:shadow-outline focus:outline-none hover:bg-gray-50 text-color-label font-bold py-2 px-4 rounded  ml-2"
              type="button"
            >
              Zaterdag 1/11
            </button>
            <button
              class="shadow focus:shadow-outline focus:outline-none hover:bg-gray-50 text-color-label font-bold py-2 px-4 rounded  ml-2"
              type="button"
            >
              Zondag 1/11
            </button>
          </div>
          <div class="grid grid-cols-2 gap-2 place-content-start mt-10 overflow-auto no-scroll h-96 w-auto">
            <div class="ml-20 font-bold mt-10">
              <img
                class="h-72 w-auto float-left"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              />
              <p class="text-center">Venom: Let there be carnage</p>
              <br />
              <p class="text-center shadow focus:shadow-outline focus:outline-none">
                14:00
              </p>
              <br />
              <p class="text-center shadow focus:shadow-outline focus:outline-none">
                16:00
              </p>
            </div>
            <div class="ml-20 font-bold mt-10">
              <img
                class="h-72 w-auto float-left"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              />
              <p class="text-center">Venom: Let there be carnage</p>
              <br />
              <p class="text-center shadow focus:shadow-outline focus:outline-none">
                14:00
              </p>
              <br />
              <p class="text-center shadow focus:shadow-outline focus:outline-none">
                16:00
              </p>
            </div>
            <div class="ml-20 font-bold mt-10">
              <img
                class="h-72 w-auto float-left"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              />
              <p class="text-center">Venom: Let there be carnage</p>
              <br />
              <p class="text-center shadow focus:shadow-outline focus:outline-none">
                14:00
              </p>
              <br />
              <p class="text-center shadow focus:shadow-outline focus:outline-none">
                16:00
              </p>
            </div>
            <div class="ml-20 font-bold mt-10">
              <img
                class="h-72 w-auto float-left"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              />
              <p class="text-center">Venom: Let there be carnage</p>
              <br />
              <p class="text-center shadow focus:shadow-outline focus:outline-none">
                14:00
              </p>
              <br />
              <p class="text-center shadow focus:shadow-outline focus:outline-none">
                16:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weekoverzicht;
