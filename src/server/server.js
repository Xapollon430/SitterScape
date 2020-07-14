const express = require("express");
const cors = require("cors");
const path = require("path");
const Routes = require("./routes/route");
const connectDB = require("./database/db");
const React = require("react");
// import ServerSideMarkup from "./html";
require("dotenv").config();
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

const X = <button>1223</button>;

app.use("/static", express.static(path.resolve(__dirname, "static")));
app.use("/api", Routes);

if (process.env.NODE_ENV === "production") {
  app.use((req, res) => res.send(ServerSideMarkup())); // SSR for prod
}

app.listen(PORT, () => {
  console.log("Listening");
});
