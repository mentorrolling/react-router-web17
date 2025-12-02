import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(UserContext);

  // const usuario = JSON.parse(localStorage.getItem("user")) || null;

  if (user.isLogin) {
    return children;
  } else {
    //  redireccionar a LOgin
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
