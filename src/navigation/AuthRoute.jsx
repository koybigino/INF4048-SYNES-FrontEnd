import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthRoute = ({ redirectPath = "/", children }) => {
  const navigate = useNavigate();

  if (localStorage.getItem("userToken")) {
    navigate(redirectPath);
  }

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      navigate(redirectPath);
    }
  })

  return children;
};

export default AuthRoute;
