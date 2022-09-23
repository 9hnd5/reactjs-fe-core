"use strict";
const path = require("path");
const webpack = require("webpack");
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
const reactRegex = /\.(ts|js)x?$/;
const babelOptions = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: true,
      },
    ],
  ],
};
module.exports = {
  context: __dirname,
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: reactRegex,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader", options: babelOptions },
          { loader: "ts-loader" },
        ],
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: "icss",
            },
          },
        ],
      },
      {
        test: lessRegex,
        exclude: lessModuleRegex,
        use: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 3,
              modules: "icss",
            },
          },
          {
            loader: require.resolve("less-loader"),
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new webpack.ProgressPlugin()],
};
