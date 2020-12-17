import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { StoreContext } from "../../store/store";

const PrivateRoute = ({ render: C, path }) => {
  const [state] = useContext(StoreContext);

  return state.isLoggedIn ? (
    <Route exact path={path} render={() => <C />} />
  ) : (
    <Redirect to={`/auth?next=${path}&type="signUp`} />
  );
};

export default PrivateRoute;
