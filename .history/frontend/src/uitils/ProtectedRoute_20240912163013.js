import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { MyContext } from '../App';

const ProtectedRoute = ({ element }) => {
  const { isLogin, setAlertBox } = useContext(MyContext);

  useEffect(() => {
    // Show snackbar message if the user is not logged in
    if (!isLogin) {
      setAlertBox({
        error: true,
        msg: "You must be logged in to access this page.",
        snackOpen: true,
      });
    }
  }, [isLogin, setAlertBox]);

  return isLogin ? element : <Navigate to="/signin" />;
};

export default ProtectedRoute;
