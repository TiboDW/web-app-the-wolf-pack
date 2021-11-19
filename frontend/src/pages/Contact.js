import React from "react";

export const Contact = () => {
  return (
    <div className="App font-bold">
      <div class="container mx-auto px-6 mt-16 text-left text-color-footer">
        Contacteer ons
        <div class="border-t-2 border-gray-300 flex flex-col items-left">
          <div class="space-around">
            <div class="grid grid-rows-3 grid-flow-col gap-4 mt-2">
              <div class="col-span-3 row-span-3">
              <form class="w-full max-w-sm mt-5">
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-color-label md:text-left mb-1 md:mb-0 pr-4"
                      for="inline-full-name"
                    >
                      Naam
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ml-2"
                      id="inline-full-name"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-color-label md:text-left mb-1 md:mb-0 pr-4"
                      for="inline-email"
                    >
                      Email
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ml-2"
                      id="inline-email"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-color-label md:text-left mb-1 md:mb-0 pr-4"
                      for="inline-phonenumber"
                    >
                      Telefoonnummer
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ml-2"
                      id="inline-phonenumber"
                      type="number"
                      required
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-color-label md:text-left mb-1 md:mb-0 pr-4"
                      for="inline-message"
                    >
                      Bericht
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <textarea
                      class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ml-2"
                      id="inline-message"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center">
                  <div class="md:w-1/3"></div>
                  <div class="md:w-2/3">
                    <button
                      class="shadow focus:shadow-outline focus:outline-none text-color-label font-bold py-2 px-4 rounded  ml-2"
                      type="button"
                    >
                      Verzenden
                    </button>
                  </div>
                </div>
              </form>
              </div>
              <div class="col-span-3 row-span-3">
              <iframe class="float-right inline" title="Bioscoop Focus Geraardsbergen" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10091.764123910294!2d3.8866667!3d50.7766667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x385f4ef80400f0e0!2sFocus%20Bioscopen!5e0!3m2!1snl!2sbe!4v1636733537559!5m2!1snl!2sbe" width="400" height="300" allowfullscreen="" loading="lazy"></iframe>

                <p>Bioscoop Focus</p>
                <p>Zonnebloemstraat</p>
                <p>9500 Geraardsbergen</p>
                <p>Tel: 054 42 17 16</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>Openingesuren</p>
                <p>Maandag: 19:30 - 22u30</p>
                <p>Dinsdag: 19:30 - 22u30</p>
                <p>Woensdag: 14:00 - 17u30 en 19u30 - 22u30</p>
                <p>Vrijdag: 19:30 - 22u30</p>
                <p>Zaterdag: 14:00 - 24u00</p>
                <p>Zondag: 14:00 - 24u00</p>
                <p>Feestdagen: 14u00 - 24u00 (uitgezonderd kerstavvond en Nieuwjaaravond)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
