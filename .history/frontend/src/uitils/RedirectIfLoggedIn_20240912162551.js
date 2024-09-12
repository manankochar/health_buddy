import { Navigate } from "react-router-dom";
import { MyContext } from "../App";
import { useContext } from "react";

const RedirectIfLoggedIn = ({ element: Component }) => {

  const { isLogin } = useContext(MyContext);

  return isLogin ? <Navigate to="/dashboard" /> : <Component />;
};

export default RedirectIfLoggedIn;