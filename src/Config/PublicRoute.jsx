import { Navigate, Outlet } from "react-router-dom";

function PublicRoute({ resticted }) {
  return resticted ?  <Navigate to="/" />:<Outlet /> ;
}

export default PublicRoute;
