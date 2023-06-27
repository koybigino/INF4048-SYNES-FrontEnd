import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children }) => {
  let navigate = useNavigate();

  if (!localStorage.getItem("userToken")) {
    return navigate('/login');
  }

  return children;
};

export default ProtectedRoute;
