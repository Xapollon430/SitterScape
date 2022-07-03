import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../../store/store";

const PrivateRoute = ({ render: Component, path }) => {
  const [state] = useContext(StoreContext);
  return (
    <AuthCheck Component={Component} path={path} loggedIn={state.loggedIn} />
  );
};

const AuthCheck = ({ loggedIn, Component, path }) =>
  loggedIn ? <Component /> : <Navigate to={`/auth?next=${path}&type=login`} />;

export default PrivateRoute;
