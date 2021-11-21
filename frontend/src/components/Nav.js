import React from 'react';
import Login from './Login';
import {Link} from 'react-router-dom';

export const Nav = () => {
    return (
       
        <nav className="border-b-2 top-0 w-full">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                
                <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                 
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  
                  <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img className="block lg:hidden h-8 w-auto" src="/images/Focus.jpg" alt="Workflow" height="20%" width="20%" />
                  <img className="hidden lg:block h-8 w-auto img-focus" src="/images/Focus.jpg" alt="Workflow" height="20%" width="20%"/>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    
                    <Link to='/' className="hover:bg-gray-50 text-color-nav px-3 py-2 rounded-md text-lg font-medium" aria-current="page">Home</Link>

                    <Link to='/weekoverzicht' className="hover:bg-gray-50 text-color-nav px-3 py-2 rounded-md text-lg font-medium" aria-current="page">Weekoverzicht</Link>
        
                    <Link to='/verwacht' className="hover:bg-gray-50 text-color-nav px-3 py-2 rounded-md text-lg font-medium" aria-current="page">Wordt verwacht</Link>
        
                    <Link to='/contact' className="hover:bg-gray-50 text-color-nav px-3 py-2 rounded-md text-lg font-medium" aria-current="page">Contacteer ons</Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               
                <div className="ml-3 relative">
                  <div>
                    <Login />
                  </div>
                </div>
              </div>
            </div>
          </div>
        
         
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</Link>
        
              <Link to="/WordtVerwacht" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Wordt verwacht</Link>
        
              <Link to="/Weekoverzicht" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Weekoverzicht</Link>
        
              <Link to="/Contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contacteer ons</Link>
            </div>
          </div>
        </nav>
        
    );
}

export default Nav;
