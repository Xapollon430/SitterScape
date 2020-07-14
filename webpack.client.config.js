const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "bundle/static"),
    filename: "react-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    port: 3000,
  },
  stats: "minimal",
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/server/static/index.html",
    }),
  ],
};
