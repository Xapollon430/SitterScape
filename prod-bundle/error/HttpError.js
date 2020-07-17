"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var HttpError = function HttpError(message, errorCode) {
  (0, _classCallCheck2["default"])(this, HttpError);
  this.errorCode = errorCode;
  this.message = message;
};

var _default = HttpError;
exports["default"] = _default;