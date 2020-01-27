/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

const express = require('express');
const app = express();
const logRequest = require('./logger.js');

app.use(express.json());
app.use(logRequest);

// routes

let db = [];

// categories

app.get('/api/v1/categories', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results, });
});

app.get('/api/v1/categories/:id', (req, res, next) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record);
});

app.post('/api/v1/categories', (req, res, next) => {
  let { name, } = req.body;
  let record = { name, };
  record.id = db.length + 1;
  db.push(record);
  res.status(201).json(record);
});

app.put('/api/v1/categories/:id', (req, res, next) => {
  let idToUpdate = req.params.id;
  let { name, id, } = req.body;
  let updatedRecord = { name, id, };
  db = db.map((record) => (record.id === parseInt(idToUpdate)) ? updatedRecord : record);
  res.json(updatedRecord);
});

app.delete('/api/v1/categories/:id', (req, res, next)=>{
  let id = req.params.id;
  db = db.filter((record) => record.id !== parseInt(id));
  res.json({ msg: 'item deleted', });
});

// products

app.get('/api/v1/products', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results, });
});

app.get('/api/v1/products/:id', (req, res, next) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record);
});

app.post('/api/v1/products', (req, res, next) => {
  let { name, } = req.body;
  let record = { name, };
  record.id = db.length + 1;
  db.push(record);
  res.status(201).json(record);
});

app.put('/api/v1/products/:id', (req, res, next) => {
  let idToUpdate = req.params.id;
  let { name, id, } = req.body;
  let updatedRecord = { name, id, };
  db = db.map((record) => (record.id === parseInt(idToUpdate)) ? updatedRecord : record);
  res.json(updatedRecord);
});

app.delete('/api/v1/products/:id', (req, res, next)=>{
  let id = req.params.id;
  db = db.filter((record) => record.id !== parseInt(id));
  res.json({ msg: 'item deleted', });
});


app.get('/wrong-date', timestamp('some string'), (req, res) => {
  let output = {
    requestTime: req.requestTime,
  };

  res.status(200).json(output);
});

app.get('/real-error', (req, res) => {
  throw new Error('my first real error');
});


// middleware

function timestamp(time){
  return (req, res, next) => {
    let requestTime = new Date(time);
    console.log(requestTime);
    return requestTime = req.requestTime;
    next();
  };
}

function logger(requestTime){
  console.log('Logger function console:', req.path, req.method, req.timestamp);
};

function errorHandler(err, req, res, next){
  res.status(500);
  res.statusMessage = 'Dude we missed up!! what should i tell  the user!! Dude its a 500 error not US!! say "server Error"';
  res.json({ error: err,});
}

function notFoundHandler(req, res, next){
  res.status(404);
  res.statusMessage = 'Dude you kinda missed up... Dude please lay off the weed a little bit...if you have some please share :) ... "Not Found"';
  res.json({ error: 'Not Found',});
}





module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log(`Dude I'm alive and very high on port ${PORT} whatzzzzz uuuuppp`));
  },
};