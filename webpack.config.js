var nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");

var serverConfig = {
  entry: "./server.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [{ test: /\.(js)$/, use: "babel-loader" }],
  },
  plugins: [new NodemonPlugin()],
  stats: "minimal",
};

module.exports = serverConfig;
