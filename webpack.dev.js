const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
module.exports = {
  entry: path.resolve("src/index.tsx"),
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    static: "./dist",
    port: 1234,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Dev"),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      favicon: "./src/assets/icons/react.svg",
      publicPath: "/",
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        memoryLimit: 4096,
      },
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
      exclude: ["vendor.js"],
      module: false,
      columns: false,
    }),
  ],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
  },
};
