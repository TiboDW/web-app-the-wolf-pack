import React from "react";
import SidebarAdmin from "../components/SidebarAdmin";
import { Link } from "react-router-dom";

var today = new Date();

function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const AdminDashboard = () => {
  return (
    <div className="App font-bold flex-grow">
      <div class="container mx-auto px-6 mt-16 text-left text-color-footer">
          <div class=" border-gray-300 flex flex-wrap">
          <SidebarAdmin />
          <div class="mt-2 ml-20 pr-20 float-right w-auto h-auto">
            <h1 class="text-center">{capitalize(today.toLocaleDateString('nl-NL', {weekday: "long"})) + '\t' +today.getDate() + '/' + (today.getMonth() + 1)}</h1>
            <div class="grid grid-cols-4 gap-2 place-content-start mt-10 overflow-auto w-auto">
            <div class="ml-20 mb-5">
            <Link to="/film">  <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              /></Link>
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
            <div class="ml-20 mb-5">
            <Link to="/film">  <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              /></Link>
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
            <div class="ml-20 mb-5">
            <Link to="/film">  <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              /></Link>
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
            <div class="ml-20 mb-5">
            <Link to="/film">  <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              /></Link>
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
            <div class="ml-20 mb-5">
            <Link to="/film">  <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              /></Link>
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
            <div class="ml-20 mb-5">
            <Link to="/film">  <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              /></Link>
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
            <div class="ml-20 mb-5">
            <Link to="/film">  <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              /></Link>
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
            <div class="ml-20 mb-5">
            <Link to="/film">  <img
                class="h-72 w-auto"
                src="/images/Venom2.jpg"
                alt="Workflow"
                height="20%"
                width="20%"
              /></Link>
              <p class="w-44 truncate">Venom: Let there be carnage</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
