"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.signUp = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../database/models/User"));

var _HttpError = _interopRequireDefault(require("../error/HttpError"));

var signUp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var signUpData, userExists, user, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            signUpData = req.body;
            _context.prev = 1;
            _context.next = 4;
            return _User["default"].findOne({
              email: signUpData.email
            });

          case 4:
            userExists = _context.sent;

            if (!userExists) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", next(new _HttpError["default"]("Email already used!", 409)));

          case 7:
            console.log(userExists);
            user = new _User["default"](signUpData);
            token = user.generateAuthToken();
            _context.next = 12;
            return user.save();

          case 12:
            res.json({
              user: user,
              token: token
            });
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", next(new _HttpError["default"](_context.t0.message, 400)));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 15]]);
  }));

  return function signUp(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.signUp = signUp;

var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var _req$body, email, password, foundUser, token;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context2.next = 3;
            return _User["default"].findOne({
              email: email
            });

          case 3:
            foundUser = _context2.sent;
            console.log(foundUser);

            if (!(!foundUser || password !== foundUser.password)) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", next(new _HttpError["default"]("Wrong password or email", 401)));

          case 7:
            _context2.next = 9;
            return foundUser.generateAuthToken();

          case 9:
            token = _context2.sent;
            res.status(200).json({
              user: foundUser,
              token: token
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function login(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.login = login;