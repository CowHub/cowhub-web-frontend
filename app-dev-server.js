/* eslint strict: 0, no-console: 0 */
'use strict';

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.dev.config');

const app = express();
const compiler = webpack(config);

const PORT = 10204;

app.get('/app/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public/index-dev.html'))
});

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  inline: true,
  stats: {
    colors: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(PORT, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${PORT}`);
});
