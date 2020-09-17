"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _server = _interopRequireDefault(require("react-dom/server"));

var _react = _interopRequireDefault(require("react"));

var X = function X() {
  return /*#__PURE__*/_react["default"].createElement("button", null, "HUZEYFE");
};

var ServerSideMarkup = function ServerSideMarkup() {
  return "<!DOCTYPE html>\n    <html lang=\"en\">\n      <head>\n        <meta charset=\"utf-8\" />\n        <meta name=\"viewport\" content=\"initial-scale=1.0, width=device-width\" />\n    \n        <link\n          href=\"https://fonts.googleapis.com/css?family=Quicksand&display=swap\"\n          rel=\"stylesheet\"\n        />\n        <link\n          rel=\"stylesheet\"\n          href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css\"\n        />\n      <link rel=\"stylesheet\" href=\"./static/stylesheets/index.css\">\n        <title>Sit</title>\n\n      </head>\n      <body>\n\n        <div id=\"modal-hook\"></div>\n        <div id=\"backdrop-hook\"></div>\n        <div id=\"root\">123</div>\n         <script src=\"./static/react-bundle.js\"></script>\n\n      </body>\n    </html>\n    ";
};

var _default = ServerSideMarkup;
exports["default"] = _default;