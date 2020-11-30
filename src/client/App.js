import Landing from "./Components/Landing/Landing";
import SearchSitter from "./Components/SearchSitter/SearchSitter";
import { Route, Switch } from "react-router-dom";

const App = (props) => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/search" render={() => <SearchSitter />} />
    </Switch>
  );
};

export default App;
