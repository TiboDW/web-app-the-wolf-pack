import React from 'react';
import {FaUserAlt} from 'react-icons/fa';
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {

    const { loginWithRedirect, isAuthenticated, user } = useAuth0();

    if (!isAuthenticated) {
        return (
            <>
                <button className="hover:bg-gray-50 text-color-nav px-3 py-2 rounded-md text-lg font-medium" 
                    id="user-menu-button" 
                    aria-expanded="false" 
                    aria-haspopup="true"
                    onClick={() => loginWithRedirect()}
                >
                    Inloggen
                </button>
            </>
        )
    }
    else {
        return (
            <div className="flex flex-row items-center">
                <FaUserAlt className="mr-1 text-color-footer text-lg"/>
                <p className="text-lg font-medium  px-3 py-2 text-color-footer"> {user.email} </p>
            </div>
        )
    }
}

export default Login;