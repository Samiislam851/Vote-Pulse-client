import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthContextProvider";
import { useContext } from "react";

function PrivateRoute({children}) {
  const  { registerUser, user, logOut, loginUser,isLogged,setIsLogged,isAdmin, isStudent, isInstructor }  = useContext(AuthContext);
  return <>{user ? children : <Navigate to="/login" />}    </>
}

export default PrivateRoute;
