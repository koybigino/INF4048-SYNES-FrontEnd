import { Navigate } from "react-router-dom";

const AuthRoute = ({ redirectPath = "/", children }) => {
  if (localStorage.getItem("token")) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default AuthRoute;
