import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./store/store";

ReactDOM.render(
  <Store>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Store>,
  document.getElementById("root")
);
