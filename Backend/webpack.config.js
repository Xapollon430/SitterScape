var nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");

var serverConfig = {
  entry: "./server.js",
  target: "node",
  externals: [nodeExternals()],
  // output: {
  //   path: __dirname,
  //   filename: "bundle.js",
  // },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/transform-runtime"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [new NodemonPlugin()],
};

module.exports = serverConfig;
