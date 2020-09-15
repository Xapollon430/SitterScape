"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controller = require("../controllers/controller");

var _HttpError = _interopRequireDefault(require("../error/HttpError"));

var router = _express["default"].Router();

router.post("/sign-up", _controller.signUp);
router.post("/login", _controller.login);
router.use(function (req, res, next) {
  return next(new _HttpError["default"]("Route doesnt exist", "400"));
});
router.use(function (error, req, res, next) {
  // Error handler route
  return res.status(error.code).json({
    error: error.message
  });
});
var _default = router;
exports["default"] = _default;