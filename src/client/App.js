import Landing from "./Components/Landing/Landing";
import SearchSitter from "./Components/SearchSitter/SearchSitter";
import Auth from "./Components/Auth/Auth";
import Inbox from "./Components/Inbox/Inbox";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Profile from "./Components/Profile/Profile";
import styled from "styled-components";
import * as actions from "./store/actions";
import { StoreContext } from "./store/store";
import { Route, Switch } from "react-router-dom";
import { useEffect, useContext } from "react";

const BigBoi = styled.h1`
  font-size: 15rem;
  width: 100vw;
  height: 100vh;
`;

const Joke = () => {
  return <BigBoi>THEY ARENT BRO!</BigBoi>;
};

const App = () => {
  const [_, dispatch] = useContext(StoreContext);
  //Automatic Login On Refresh
  useEffect(() => {
    const autoLogin = async () => {
      console.log(123);
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
      <PrivateRoute exact path="/sitter-form" render={() => <Joke />} />
      <PrivateRoute exact path="/profile" render={() => <Profile />} />
      <Route path="/*" render={() => <Landing />} />
    </Switch>
  );
};

export default App;
