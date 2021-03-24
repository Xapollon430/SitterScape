"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var controllers = _interopRequireWildcard(require("../controllers/controller"));

var router = _express["default"].Router();

router.post("/sign-up", controllers.signUp);
router.post("/login", controllers.login);
router.get("/auto-login", controllers.autoLogin);
router.get("/log-out", controllers.logOut);
router.use(function (req, res, next) {
  return res.status(400).send("Route doesn't exist!");
});
var _default = router;
exports["default"] = _default;