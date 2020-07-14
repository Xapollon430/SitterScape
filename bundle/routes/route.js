"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var express = require("express");

var _require = require("../controllers/controller"),
    login = _require.login,
    signUp = _require.signUp;

var HttpError = require("../error/HttpError");

var router = express.Router();
router.post("/sign-up", signUp);
router.post("/login", login);
router.use(function (req, res, next) {
  req.error = new HttpError("Route doesnt exist", "400");
  return next();
});
router.use( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", res.status(req.error.errorCode).json({
              error: req.error.message
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
module.exports = router;