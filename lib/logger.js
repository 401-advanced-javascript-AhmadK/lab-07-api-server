/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';

let server = require('./server.js');

module.exports = (req, res, next) => {
  console.log('Logger request info:', req.method, req.path, new Date().toString());
  next();
};
