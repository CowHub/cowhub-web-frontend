/* eslint strict: 0, no-console: 0 */
'use strict';

const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.SERVER_PORT;

const applyDev = (app) => {
  const webpack = require('webpack');
  const config = require('./webpack.dev.config');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    inline: true,
    noInfo: true,
    stats: {
      colors: true
    }
  }));

  app.use(require('webpack-hot-middleware')(compiler));
};

const applyPro = (app) => {
  app.get('/style.css', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/dist/style.css'))
  })

  app.get('/bundle.js', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/dist/bundle.js'))
  })
}

if (process.env.NODE_ENV === 'development') { applyDev(app); }
if (process.env.NODE_ENV === 'production' ) { applyPro(app); }

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

const HOST = '0.0.0.0';
app.listen(PORT, HOST, err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://${HOST}:${PORT}`);
});
