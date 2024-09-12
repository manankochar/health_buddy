import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MyContext } from "../App";

const RedirectIfLoggedIn = ({ element: Component }) => {
  const { isLogin, setAlertBox } = useContext(MyContext);

  useEffect(() => {
    if (isLogin) {
      setAlertBox({
        error: true,
        msg: "You are already logged in.",
        snackOpen: true,
      });
    }
  }, [isLogin, setAlertBox]);

  return isLogin ? <Navigate to="/dashboard" /> : <Component />;
};

export default RedirectIfLoggedIn;
