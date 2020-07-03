var nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const serverConfig = {
  entry: "./src/server/server.js",
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "src/server/"),
    filename: "serverbundle.js",
  },
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

      // {
      //   test: /\.(png|jpg|jpeg)$/i,
      //   use: [
      //     {
      //       loader: "url-loader",
      //     },
      //   ],
      // },
    ],
  },
  plugins: [new NodemonPlugin()],
};

const clientConfig = {
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "src/server/static"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
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
    ],
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
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
module.exports = serverConfig;
