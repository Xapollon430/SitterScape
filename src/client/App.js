import Landing from "./Components/Landing/Landing";
import SearchSitter from "./Components/SearchSitter/SearchSitter";
import Auth from "./Components/Auth/Auth";
import Inbox from "./Components/Inbox/Inbox";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ProfileForm from "./Components/ProfileForm/ProfileForm";
import * as actions from "./store/actions";
import { StoreContext } from "./store/store";
import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useContext } from "react";

const App = () => {
  const [_, dispatch] = useContext(StoreContext);
  const history = useHistory();
  //Automatic Login On Refresh
  useEffect(() => {
    const autoLogin = async () => {
      try {
        let response = await fetch(
          `${process.env.SITTERSCAPE_API_URL}/api/auto-login`,
          {
            credentials: "include",
          }
        );

        if (response.status != 200) {
          throw await response.text();
        }
        let data = await response.json();

        dispatch(
          actions.generalDispatchBundler({
            user: data.user,
            loggedIn: true,
            accessToken: data.accessToken,
          })
        );

        const url = new URL(window.location.href); //Redirect to the correct path after auto-login
        const redirect = url.searchParams.get("next");
        if (redirect) {
          history.push(redirect);
        }
      } catch (e) {
        console.log(e);
        //If token runs out during user session.
        dispatch(
          actions.generalDispatchBundler({
            user: null,
            loggedIn: false,
            accessToken: null,
          })
        );
      }
    };

    autoLogin();
    setInterval(autoLogin, 1200000);
  }, []);

  return (
    <Switch>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/search" render={() => <SearchSitter />} />
      <Route exact path="/auth" render={() => <Auth />} />
      <PrivateRoute exact path="/inbox" render={() => <Inbox />} />
      <PrivateRoute path="/profile" render={() => <ProfileForm />} />

      <Route path="/*" render={() => <Landing />} />
    </Switch>
  );
};

export default App;
