/* eslint-disable no-unused-vars */
'use strict';

function timestamp (req,res,next){
  let requestTime = new Date().toString();
  req.timeStamp = requestTime;
  next();
}

module.exports = (req, res, next) => {
  let requestTime = new Date().toString();
  req.timeStamp = requestTime;
  console.log('request info:', req.method, req.path, req.timeStamp);
  next();
};