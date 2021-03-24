"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var X = function X() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    children: "HUZEYFE"
  });
};

var ServerSideMarkup = function ServerSideMarkup() {
  return "<!DOCTYPE html>\n  <html lang=\"en\">\n    <head>\n      <meta charset=\"utf-8\" />\n      <meta name=\"viewport\" content=\"initial-scale=1,width=device-width\" />\n  \n      <link\n        rel=\"stylesheet\"\n        href=\"/static/stylesheets/index.css\"\n      />\n  \n      <title>SitterScape</title>\n    </head>\n    <body>\n      <div id=\"modal-hook\"></div>\n      <div id=\"backdrop-hook\"></div>\n      <div id=\"root\">".concat(_server["default"].renderToString( /*#__PURE__*/(0, _jsxRuntime.jsx)(X, {})), "</div>\n      <script src=\"/static/react-bundle.js\"></script>\n\n    </body>\n  </html>\n  ");
};

var _default = ServerSideMarkup;
exports["default"] = _default;