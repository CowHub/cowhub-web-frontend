/* eslint strict: 0, no-console: 0 */
'use strict';

const path = require('path');
const express = require('express');

const app = express();

const PORT = process.env.SERVER_PORT;

app.get('/style.css', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/dist/style.css'))
})

app.get('/bundle.js', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/dist/bundle.js'))
})

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
});

app.listen(PORT, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${PORT}`);
});
