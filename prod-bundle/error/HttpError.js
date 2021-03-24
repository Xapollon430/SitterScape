"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var HttpError = function HttpError(message, code) {
  (0, _classCallCheck2["default"])(this, HttpError);
  this.code = code;
  this.message = message;
};

var _default = HttpError;
exports["default"] = _default;