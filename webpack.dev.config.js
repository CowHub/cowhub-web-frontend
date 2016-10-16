/* eslint strict: 0 */
'use strict';

var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var cssloader = "css-loader!postcss-loader";
var sassloader = "style-loader!css-loader!sass-loader!postcss-loader";

module.exports = {
  _cssloader: cssloader,
  _sassloader: sassloader,
  cache: true,
  debug: true,
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:10204/__webpack_hmr',
    './dev/index.js'
  ],
  output: {
    publicPath: 'http://localhost:10204/',
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /(node_modules)/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      },
      {
        test: /\.woff[0-9A-Za-z]*$/,
        loader: require.resolve('file-loader'),
        query: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.css$/,
        loader: cssloader
      },
      {
        test: /\.scss$/,
        loader: sassloader
      }
    ],
    noParse: /lie\.js|[\s\S]*.(svg|ttf|eot)/
  },
  eslint: {
    emitWarning: true,
    emitError: true,
    failOnWarning: true,
    failOnError: true
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': true,
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  stats: {
    children: false
  }
};
