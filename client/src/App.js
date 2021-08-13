import Landing from "./components/Landing/Landing";
import SearchSitter from "./components/SearchSitter/SearchSitter";
import Auth from "./components/Auth/Auth";
import Inbox from "./components/Inbox/Inbox";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "./components/ProfileForm/Profile";
import * as actions from "./store/actions";
import * as S from "./App.styles";
import { StoreContext } from "./store/store";
import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useContext, useState } from "react";

const App = () => {
  const [_, dispatch] = useContext(StoreContext);
  const history = useHistory();
  const [autoLoginAttempted, setAutoLoginAttempted] = useState(false);
  //Automatic Login On Refresh
  useEffect(() => {
    const autoLogin = async () => {
      try {
        let response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/api/auto-login`,
          {
            credentials: "include",
          }
        );

        if (response.status != 200) {
          setAutoLoginAttempted(true);
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
        setAutoLoginAttempted(true);
      } catch (e) {
        setAutoLoginAttempted(true);
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

  return autoLoginAttempted ? (
    <Switch>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/search" render={() => <SearchSitter />} />
      <Route exact path="/auth" render={() => <Auth />} />
      <PrivateRoute exact path="/inbox" render={() => <Inbox />} />
      <PrivateRoute exact path="/profile" render={() => <Profile />} />
      <PrivateRoute exact path="/profile/sitter" render={() => <Profile />} />
      <Route path="/*" render={() => <Landing />} />
    </Switch>
  ) : (
    <S.SpinnerWrapper>
      <S.Spinner />
    </S.SpinnerWrapper>
  );
};

export default App;
