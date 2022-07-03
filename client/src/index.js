import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import Store from "./store/store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Store>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Store>
);
