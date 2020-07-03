import React, { Fragment } from "react";
import Landing from "./Components/Landing/Landing";
import FindSitter from "./Components/FindSitter/FindSitter";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

const App = () => {
  return (
    <Fragment>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/search" render={() => <FindSitter />} />
    </Fragment>
  );
};

export default App;
