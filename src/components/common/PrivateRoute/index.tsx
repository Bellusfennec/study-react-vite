import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthProvider";

const PrivateRoute = () => {
  const auth = useAuth();
  const location = useLocation();

  if (auth?.user === null) {
    return <Navigate to="/auth" state={{ from: location.pathname }} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
