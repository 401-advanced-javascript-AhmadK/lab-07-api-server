/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';

module.exports = (req, res, next) => {
  console.log('request info:', req.method, req.path);
  console.log( 'the time is: ',new Date());
  next();
};