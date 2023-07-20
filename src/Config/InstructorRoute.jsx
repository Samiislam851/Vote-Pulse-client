import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthContextProvider";
import { useContext } from "react";

function InstructorRoute({children}) {
  const  { registerUser, user, logOut, loginUser,isLogged,setIsLogged,isAdmin, isStudent, isInstructor , loading,adminStateLoading}  = useContext(AuthContext);
  return !adminStateLoading &&    <>{isInstructor  ? children : <Navigate to="/" />}    </>
 
}

export default InstructorRoute;

import React from 'react';

 
