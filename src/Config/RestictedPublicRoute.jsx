import React from 'react';
 

import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthContextProvider";
import { useContext } from "react";

function RestictedPublicRoute({children}) {
  const  { registerUser, user, logOut, loginUser,isLogged,setIsLogged }  = useContext(AuthContext);
  return <>{user ?<Navigate to="/" /> : children }    </>
}

export default RestictedPublicRoute;
