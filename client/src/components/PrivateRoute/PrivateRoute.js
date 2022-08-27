import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { StoreContext } from "../../store/store";
import Auth from "../Auth/Auth";

const PrivateRoute = ({ render: Component, path }) => {
  const [state] = useContext(StoreContext);
  const location = useLocation();

  return state.loggedIn ? <Component /> : <Auth state={location} next={path} />;
};

export default PrivateRoute;
