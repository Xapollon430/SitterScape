"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logOut = exports.autoLogin = exports.login = exports.signUp = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../database/models/User"));

var _HttpError = _interopRequireDefault(require("../error/HttpError"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _cryptoJs = require("crypto-js");

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var monthToMiliseconds = 30 * 24 * 60 * 60 * 1000;

var signUp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var signUpData, userExists, newUser, _newUser$generateToke, refreshToken, accessToken;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            signUpData = req.body;
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

            return _context.abrupt("return", res.status(409).send("Email is already in use!"));

          case 7:
            newUser = new _User["default"](signUpData);
            _newUser$generateToke = newUser.generateTokens(), refreshToken = _newUser$generateToke.refreshToken, accessToken = _newUser$generateToke.accessToken;
            _context.next = 11;
            return newUser.save();

          case 11:
            res.cookie("refreshToken", refreshToken, {
              maxAge: monthToMiliseconds,
              httpOnly: true // secure: process.env.NODE_ENV === "production" ? true : false,

            });
            res.json({
              user: newUser,
              accessToken: accessToken
            });
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).send("Something went wrong"));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));

  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signUp = signUp;

var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, email, password, foundUser, _foundUser$generateTo, refreshToken, accessToken;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context2.next = 4;
            return _User["default"].findOne({
              email: email
            });

          case 4:
            foundUser = _context2.sent;

            if (!(!foundUser || password !== foundUser.password)) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(401).send("Wrong password or email!"));

          case 7:
            _foundUser$generateTo = foundUser.generateTokens(), refreshToken = _foundUser$generateTo.refreshToken, accessToken = _foundUser$generateTo.accessToken;
            res.cookie("refreshToken", refreshToken, {
              maxAge: monthToMiliseconds,
              httpOnly: true // secure: process.env.NODE_ENV === "production" ? true : false,

            });
            res.status(200).json({
              user: foundUser,
              accessToken: accessToken
            });
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(500).send("Something went wrong!"));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.login = login;

var autoLogin = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var refreshToken, token, user, accessToken;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            refreshToken = req.cookies.refreshToken;
            token = _jsonwebtoken["default"].verify(refreshToken, process.env.JWT_SECRET);
            _context3.next = 5;
            return _User["default"].findById(token.id);

          case 5:
            user = _context3.sent;
            accessToken = user.generateAccessToken();
            res.status(200).json({
              accessToken: accessToken,
              user: user
            });
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(400).send("Couldn't log in!"));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function autoLogin(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.autoLogin = autoLogin;

var logOut = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            res.clearCookie("refreshToken");
            res.status(200).json("Succesfully logged out!");
            _context4.next = 8;
            break;

          case 5:
            _context4.prev = 5;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(400).send("Couldn't log out!"));

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 5]]);
  }));

  return function logOut(_x7, _x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

exports.logOut = logOut;