"use strict";

var express = require("express");

var cors = require("cors");

var path = require("path");

var Routes = require("./routes/route");

var connectDB = require("./database/db");

var React = require("react"); // import ServerSideMarkup from "./html";


require("dotenv").config();

connectDB();
var PORT = process.env.PORT || 5000;
var app = express();
app.use(express.json());
app.use(cors());
var X = /*#__PURE__*/React.createElement("button", null, "1223");
app.use("/static", express["static"](path.resolve(__dirname, "static")));
app.use("/api", Routes);

if (process.env.NODE_ENV === "production") {
  app.use(function (req, res) {
    return res.send(ServerSideMarkup());
  }); // SSR for prod
}

app.listen(PORT, function () {
  console.log("Listening");
});