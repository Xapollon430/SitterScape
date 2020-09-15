"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.signUp = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../database/models/User"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _HttpError = _interopRequireDefault(require("../error/HttpError"));

var signUp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var signUpData;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            signUpData = req.body;
            _context2.prev = 1;

            _User["default"].findOne({
              email: req.body.email
            }, /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, emailExists) {
                var user, token;
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!emailExists) {
                          _context.next = 2;
                          break;
                        }

                        return _context.abrupt("return", next(new _HttpError["default"]("Email already used!", 500)));

                      case 2:
                        console.log(signUpData);
                        user = new _User["default"](signUpData);
                        token = user.generateAuthToken();
                        _context.next = 7;
                        return user.save();

                      case 7:
                        res.send({
                          user: user,
                          token: token
                        });

                      case 8:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x4, _x5) {
                return _ref2.apply(this, arguments);
              };
            }());

            _context2.next = 8;
            break;

          case 5:
            _context2.prev = 5;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", next(new _HttpError["default"](_context2.t0.message, 400)));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 5]]);
  }));

  return function signUp(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.signUp = signUp;

var login = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var _req$body, email, password, foundUser, token;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context3.next = 3;
            return _User["default"].findOne({
              email: email
            });

          case 3:
            foundUser = _context3.sent;

            if (foundUser) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", next(new _HttpError["default"]("Wrong password or email", 400)));

          case 8:
            if (!(!password === foundUser.password)) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", next(new _HttpError["default"]("Wrong password or email", 400)));

          case 10:
            _context3.next = 12;
            return foundUser.generateAuthToken();

          case 12:
            token = _context3.sent;
            res.status(200).send({
              user: foundUser,
              token: token
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function login(_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

exports.login = login;