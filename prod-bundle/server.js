"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _route = _interopRequireDefault(require("./routes/route"));

var _db = _interopRequireDefault(require("./database/db"));

var _React = _interopRequireDefault(require("react"));

var _dotenv = require("dotenv");

var _html = _interopRequireDefault(require("./html"));

(0, _dotenv.config)();
(0, _db["default"])();
var PORT = process.env.PORT || 5000;
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _cors["default"])());

var X = /*#__PURE__*/ _React["default"].createElement("button", null, "1223");

app.use(
  "/static",
  _express["default"]["static"](_path["default"].resolve(__dirname, "static"))
);
app.use("/api", _route["default"]);

if (process.env.NODE_ENV === "production") {
  app.use("/", function (req, res) {
    return res.send((0, _html["default"])());
  }); // SSR for prod
}

app.listen(PORT, function () {
  console.log("Listening");
});
