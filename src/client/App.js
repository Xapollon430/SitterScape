import React from "react";
import Landing from "./Components/Landing/Landing";
import FindSitter from "./Components/FindSitter/FindSitter";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/search" render={() => <FindSitter />} />
      <Route exact path="/api" render={() => <button>123</button>} />
    </Switch>
  );
};

export default App;
