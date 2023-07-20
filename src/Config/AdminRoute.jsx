import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthContextProvider";
import { useContext } from "react";

function AdminRoute({children}) {
  const  { registerUser, user, logOut, loginUser,isLogged,setIsLogged,isAdmin, isStudent, isInstructor,loading ,adminStateLoading}  = useContext(AuthContext);
  // return <>{isAdmin && !loading ? children : <Navigate to="/" />} </>
  return !adminStateLoading &&    <>{isAdmin  ? children : <Navigate to="/" />}    </>
}

export default AdminRoute;

 