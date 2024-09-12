import { Navigate } from "react-router-dom";
import { MyContext } from "../App";
const RedirectIfLoggedIn = ({ element: Component }) => {
  const { isLogin } = useContext(MyContext);

  return isLogin ? <Navigate to="/dashboard" /> : <Component />;
};

export default RedirectIfLoggedIn;