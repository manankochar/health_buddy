import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MyContext } from '../../';

const ProtectedRoute = ({ element: Component }) => {
  const { isLogin } = useContext(MyContext);

  return isLogin ? <Component /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
