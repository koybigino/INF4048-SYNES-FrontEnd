import React, { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({children }) => {
  let navigate = useNavigate();

  if (!localStorage.getItem("userToken")) {
    return navigate('/login');
  }

  return children;
};

export default ProtectedRoute;
