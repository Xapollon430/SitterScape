const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

//This is for client side code, the server doesnt use webpack and only uses babel

module.exports = (env) => {
  return {
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
      historyApiFallback: true, // redirect every request to /
      open: true,
      port: 3000,
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: "./src/server/static/index.html",
      }),

      new webpack.DefinePlugin({
        "process.env.SITTERSCAPE_API_URL":
          env.ENV === "production"
            ? JSON.stringify("https://sitterscape.com")
            : JSON.stringify("http://localhost:5000"),
      }),
    ],
  };
};
