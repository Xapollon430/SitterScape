import React, { useState } from "react";
import Landing from "./Components/Landing/Landing";
import FindSitter from "./Components/FindSitter/FindSitter";
import { Route, Switch } from "react-router-dom";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/javascript");
const myRequest = new Request("http://localhost:5000/static/za.js", {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
});

fetch(myRequest)
  .then((response) => response.blob())
  .then((myBlob) => {
    myBlob.src = URL.createObjectURL(myBlob);
  });

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/search" render={() => <FindSitter />} />
    </Switch>
  );
};

export default App;
