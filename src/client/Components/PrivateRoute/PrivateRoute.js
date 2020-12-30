import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { StoreContext } from "../../store/store";

const PrivateRoute = ({ render: C, path }) => {
  const [state] = useContext(StoreContext);
  console.log(state);
  return (
    <Route
      exact
      path={path}
      render={() =>
        state.loggedIn ? (
          <C />
        ) : (
          <Redirect to={`/auth?next=${path}&type=login`} />
        )
      }
    />
  );
};

export default PrivateRoute;
