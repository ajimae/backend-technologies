var express = require('express');

var app = express();

app.get('/', function (_, res) {
  return res.status(200).json({
    success: true,
    message: 'hello kubernetess'
  });
});

app.get('*', function (_, res) {
  return res.status(404).json({
    success: false,
    message: 'not found'
  });
});

module.exports = app;
