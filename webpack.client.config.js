const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = (env) => ({
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "prod-bundle/static"),
    filename: "react-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    open: true,
    port: 3000,
  },
  plugins: [
    env.ENV === "development" &&
      new HTMLWebpackPlugin({
        template: "./src/server/static/index.html",
      }),

    new webpack.DefinePlugin({
      "process.env.SIT_API_URL":
        env.ENV === "production"
          ? JSON.stringify("https://vk-sit.herokuapp.com")
          : JSON.stringify("http://localhost:5000"),
    }),
  ],
});
