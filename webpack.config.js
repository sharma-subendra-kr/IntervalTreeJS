/*

IntervalTreeJS, a JavaScript Binary Search Tree library that helps to query, insert and delete intervals in the binary search tree.

Copyright © 2019-2020, Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of IntervalTreeJS.

IntervalTreeJS is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

IntervalTreeJS is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with IntervalTreeJS.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/

var fs = require("fs");
var path = require("path");

var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var miniCssExtractPlugin = new MiniCssExtractPlugin({ filename: "index.css" });
var WebpackNotifierPlugin = require("webpack-notifier");
var webpackNotifierPlugin = new WebpackNotifierPlugin({
  title: "interval-trees",
  alwaysNotify: true,
});
var Webpack = require("webpack");
var webpackBannerPlugin = new Webpack.BannerPlugin({
  banner: fs.readFileSync("./license_header", "utf8"),
  raw: true,
});

module.exports = {
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  devtool:
    process.env.NODE_ENV === "development" ? "inline-source-map" : "none",
  entry: __dirname + "/src/index.js",
  optimization: {
    minimize: process.env.MINIMIZE === "true" ? true : false,
  },
  output: {
    path:
      process.env.NODE_ENV === "development"
        ? __dirname + "/public/assets"
        : __dirname + "/dist/umd/",
    publicPath: "assets",
    filename:
      process.env.NODE_ENV === "development"
        ? "index.js"
        : process.env.MINIMIZE === "true"
        ? "interval.tree.js.production.min.js"
        : "interval.tree.js.development.js",
    library: "IntervalTreeJS",
    libraryTarget: "umd",
  },
  devServer: {
    inline: true,
    contentBase: "./public",
    port: process.env.PORT,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: "json-loader",
      },
      {
        test: /\.(sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development",
              reloadAll: true,
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [miniCssExtractPlugin, webpackNotifierPlugin, webpackBannerPlugin],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src/"),
    },
  },
};
