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
const path = require("path");

// module.exports = {
//     entry: "./src/index.js",
//     output: {
//         path: path.resolve(__dirname, "../Backend/static"),
//         filename: "bundle.js",
//     },
//     mode: "development",
//     module: {
//         rules: [
//             {
//                 test: /\.jsx?$/,
//                 exclude: /node_modules/,
//                 loader: "babel-loader",
//             },
//             {
//                 test: /\.css$/i,
//                 use: ["style-loader", "css-loader"],
//             },
//             {
//                 test: /\.(png|svg|jpg|gif)$/,
//                 use: ["file-loader"],
//             },
//         ],
//     },
//     devServer: {
//         historyApiFallback: true,
//         compress: true,
//         open: true,
//         port: 3000,
//     },
//     stats: "minimal",
// };
