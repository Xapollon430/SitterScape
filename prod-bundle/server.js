"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _dotenv = require("dotenv");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _route = _interopRequireDefault(require("./routes/route"));

var _html = _interopRequireDefault(require("./html"));

require("./database/db");

(0, _dotenv.config)(); // fix

var PORT = process.env.PORT || 5000;
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use("/static", _express["default"]["static"](_path["default"].resolve(__dirname, "static")));
app.use("/api", _route["default"]); // PROD ROUTE FOR SSR

if (process.env.NODE_ENV === "production") {
  app.get("/", function (_, res) {
    return res.send((0, _html["default"])());
  });
}

app.listen(PORT, function () {
  console.log("Listening");
});