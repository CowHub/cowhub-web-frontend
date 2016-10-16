var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var options = require("./webpack.dev.config");

options.entry = [ options.entry[options.entry.length - 1] ];

options.module.loaders = [
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
    loader: ExtractTextPlugin.extract(options._cssloader)
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract("css-loader!sass-loader!postcss-loader")
  }
]

options.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': false,
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false
    },
    sourceMap: false
  }),
  new ExtractTextPlugin('style.css', { allChunks: true })
];

options.output.path = path.join(__dirname, 'dist');

delete options.output.publicPath;
delete options.debug;
delete options.devtool;

module.exports = options;
