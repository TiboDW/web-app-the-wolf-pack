import React from "react";

const Vertoning = ({ vertoning }) => {
   
    return (
        <div className="flex flex-row text-black mt-2">
            <div className="flex flex-col w-3/4 ">
                 <p> {vertoning.dag.toUpperCase()} </p>
                 <p className="font-extralight"> {vertoning.datum} </p>
            </div>
            <button class="ml-2 shadow font-bold py-2 px-4 rounded hover:bg-gray-50">{vertoning.uur}</button>
        </div>
    );

}

export default Vertoning;