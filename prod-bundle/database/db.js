"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(
  require("@babel/runtime/regenerator")
);

var _asyncToGenerator2 = _interopRequireDefault(
  require("@babel/runtime/helpers/asyncToGenerator")
);

var _mongoose = _interopRequireDefault(require("mongoose"));

var connectDB = /*#__PURE__*/ (function () {
  var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/ _regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              try {
                _mongoose["default"].connect(process.env.MONGO_URL, {
                  useNewUrlParser: true,
                  useUnifiedTopology: true,
                });
              } catch (err) {
                console.error(err);
                process.exit(1);
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })
  );

  return function connectDB() {
    return _ref.apply(this, arguments);
  };
})();

var _default = connectDB;
exports["default"] = _default;
