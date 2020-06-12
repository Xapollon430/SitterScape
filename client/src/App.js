import React from "react";
import logo from "./logo.svg";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      sa
      <Route path="/12" component={X}></Route>
    </div>
  );
}

function X() {
  return <button>render 12</button>;
}

export default App;
