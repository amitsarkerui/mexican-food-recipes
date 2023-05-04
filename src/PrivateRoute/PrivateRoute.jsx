import React, { useContext } from "react";
import { AuthContextProvider } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContextProvider);
  const location = useLocation();
  if (loading) {
    return <progress className="mt-96 progress w-56"></progress>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
