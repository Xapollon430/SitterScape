import Landing from "./Components/Landing/Landing";
import SearchSitter from "./Components/SearchSitter/SearchSitter";
import { Route, Switch } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "./store/store";

const App = (props) => {
  const x = useContext(StoreContext);

  console.log(x[0]);

  return (
    <Switch>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/search" render={() => <SearchSitter />} />\
    </Switch>
  );
};

export default App;
