import React from 'react'
import {Link} from 'react-router-dom';

export const Nav = () => {
    return (
       
        <nav class="border-b-2 top-0 w-full">
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                
                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                 
                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  
                  <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0 flex items-center">
                  <img class="block lg:hidden h-8 w-auto" src="/images/Focus.jpg" alt="Workflow" height="20%" width="20%" />
                  <img class="hidden lg:block h-8 w-auto img-focus" src="/images/Focus.jpg" alt="Workflow" height="20%" width="20%"/>
                </div>
                <div class="hidden sm:block sm:ml-6">
                  <div class="flex space-x-4">
                    
                    <Link to='/' class="hover:bg-gray-50 text-color-nav px-3 py-2 rounded-md text-lg font-medium" aria-current="page">Home</Link>

                    <Link to='/weekoverzicht' class="hover:bg-gray-50 text-color-nav px-3 py-2 rounded-md text-lg font-medium" aria-current="page">Weekoverzicht</Link>
        
                    <Link to='/verwacht' class="hover:bg-gray-50 text-color-nav px-3 py-2 rounded-md text-lg font-medium" aria-current="page">Wordt verwacht</Link>
        
                    <Link to='/contact' class="hover:bg-gray-50 text-color-nav px-3 py-2 rounded-md text-lg font-medium" aria-current="page">Contacteer ons</Link>
                  </div>
                </div>
              </div>
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               
                <div class="ml-3 relative">
                  <div>
                    <button type="button" class="hover:bg-gray-50 text-color-nav px-3 py-2 rounded-md text-lg font-medium" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span class="sr-only">Open user menu</span>
                      Inloggen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
         
          <div class="sm:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</Link>
        
              <Link to="/WordtVerwacht" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Wordt verwacht</Link>
        
              <Link to="/Weekoverzicht" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Weekoverzicht</Link>
        
              <Link to="/Contact" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contacteer ons</Link>
            </div>
          </div>
        </nav>
        
    );
}

export default Nav;