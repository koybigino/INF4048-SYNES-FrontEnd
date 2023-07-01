import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children }) => {
  let navigate = useNavigate();

  if (!localStorage.getItem("userToken")) {
    navigate('/login');
  }
  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      navigate('/login');
    }
  })

  return children;
};

export default ProtectedRoute;
