const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");
const path = require("path");

var serverConfig = {
  entry: "./src/server/server.js",
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },

  // externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "src/server/"),
    filename: "serverbundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/transform-runtime"],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [new NodemonPlugin()],
  stats: "minimal",
};

module.exports = serverConfig;
