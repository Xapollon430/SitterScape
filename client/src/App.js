import Landing from "./components/Landing/Landing";
import SearchSitter from "./components/SearchSitter/SearchSitter";
import Auth from "./components/Auth/Auth";
import Inbox from "./components/Inbox/Inbox";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "./components/ProfileForm/Profile";
import Sitter from "./components/Sitter/Sitter";
import * as actions from "./store/actions";
import * as S from "./App.styles";
import { StoreContext } from "./store/store";
import { Route, Switch } from "react-router-dom";
import { useEffect, useContext, useState } from "react";

const TwentyMinutesInMiliseconds = 20 * 60 * 1000;

const App = () => {
  const [_, dispatch] = useContext(StoreContext);
  const [autoLoginAttempted, setAutoLoginAttempted] = useState(false);
  // Automatic login on refresh
  // Also auto logging every 20 minutes to keep the session secure
  useEffect(() => {
    const autoLogin = async () => {
      try {
        let response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/api/auto-login`,
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
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
      } catch (e) {
        //If token runs out during user session.
        dispatch(
          actions.generalDispatchBundler({
            user: null,
            loggedIn: false,
            accessToken: null,
          })
        );
      }

      setAutoLoginAttempted(true);
    };

    autoLogin();
    setInterval(autoLogin, TwentyMinutesInMiliseconds);
  }, []);

  return "nig";
};

export default App;
