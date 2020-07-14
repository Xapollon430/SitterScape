"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var Sitter = require("../database/models/Sitter");

var Owner = require("../database/models/Owner");

var dotenv = require("dotenv");

dotenv.config();

var signUp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var userData, user, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userData = req.body;
            _context.prev = 1;
            user = new User(userData);
            token = user.generateAuthToken();
            _context.next = 6;
            return user.save();

          case 6:
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(400).send({
              error: "Failed signing up."
            }));

          case 12:
            res.send({
              user: user,
              token: token
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var _req$body, email, password, foundUser, isValidPassword, token;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context2.next = 3;
            return User.findOne({
              email: email
            });

          case 3:
            foundUser = _context2.sent;

            if (foundUser) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: "Wrong password or email"
            }, 400));

          case 6:
            isValidPassword = password === foundUser.password;

            if (isValidPassword) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: "Wrong password or email"
            }, 400));

          case 9:
            _context2.next = 11;
            return foundUser.generateAuthToken();

          case 11:
            token = _context2.sent;
            res.status(200).send({
              user: {
                username: foundUser.username,
                email: foundUser.email
              },
              token: token
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function login(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = {
  login: login,
  signUp: signUp
};