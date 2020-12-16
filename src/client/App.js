import Landing from "./Components/Landing/Landing";
import SearchSitter from "./Components/SearchSitter/SearchSitter";
import Auth from "./Components/Auth/Auth";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

const BigBoi = styled.h1`
  font-size: 15rem;
  width: 100vw;
  height: 100vh;
`;

const Joke = () => {
  return <BigBoi>THEY ARENT BRO!</BigBoi>;
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/search" render={() => <SearchSitter />} />
      <Route exact path="/joke" render={() => <Joke />} />
      <Route exact path="/auth" render={() => <Auth />} />
      {/* <Route exact path="/sitter-form" render={Joke}></Route> */}
    </Switch>
  );
};

export default App;
