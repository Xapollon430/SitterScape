import Landing from "./Components/Landing/Landing";
import SearchSitter from "./Components/SearchSitter/SearchSitter";
import Auth from "./Components/Auth/Auth";
import Inbox from "./Components/Inbox/Inbox";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { Post } from "./Functions/Functions";

const BigBoi = styled.h1`
  font-size: 15rem;
  width: 100vw;
  height: 100vh;
`;

const Joke = () => {
  return <BigBoi>THEY ARENT BRO!</BigBoi>;
};

const App = () => {
  useEffect(() => {
    const token = localStorage.getItem("jwt-token");

    const autoLogin = async () => {
      try {
        let response = await Post(
          `${process.env.SITTERSCAPE_API_URL}/api/auto-login`,
          {
            token,
          }
        );

        console.log(response);
      } catch (e) {}
    };

    token ? autoLogin() : null;
  }, []);

  return (
    <Switch>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/search" render={() => <SearchSitter />} />
      <Route exact path="/joke" render={() => <Joke />} />
      <Route exact path="/auth" render={() => <Auth />} />
      <PrivateRoute path="/inbox" render={() => <Inbox />} />
      <PrivateRoute path="/sitter-form" render={() => <Joke />} />
    </Switch>
  );
};

export default App;
