import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const usuario = JSON.parse(localStorage.getItem("user")) || null;

  if (usuario) {
    return children;
  } else {
    //  redireccionar a LOgin
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
