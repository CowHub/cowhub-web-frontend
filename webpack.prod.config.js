var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var options = require("./webpack.dev.config");

options.entry = [ options.entry[options.entry.length - 1] ];

options.plugins = [
  new ExtractTextPlugin('style.css', { allChunks: true }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': false,
    'process.env': {
      'API_ENDPOINT': JSON.stringify('http://api.cowhub.co.uk'),
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false
    },
    sourceMap: false
  })
];

options.module.loaders[options.module.loaders.length - 2] = {
  test: /\.(s?)css$/,
  loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
}

options.output.path = path.join(__dirname, 'dist');

delete options.output.publicPath;
delete options.debug;
delete options.devtool;

module.exports = options;
