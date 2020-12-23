"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphql = require("graphql");

var schema = (0, _graphql.buildSchema)("\n  type Query {\n    login: String\n    createEvent: String\n  }\n\n  schema{\n    query:Query\n  }\n");
var _default = schema;
exports["default"] = _default;