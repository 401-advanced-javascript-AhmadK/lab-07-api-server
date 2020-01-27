/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';

const { server, } = require('../../lib/server.js');
const supertest = require ('supertest');
const mockRequest = supertest(server);

describe('Web Server', ()=> {
  it('Gives a response of 500 in case of error', ()=> {
    return mockRequest
      .get('/real-error')
      .then(results =>{
        expect(results.status).toBe(500);
      }).catch(console.error);
  });
  it('Gives a response of 404 if the route is not found', () => {
    return mockRequest
      .get('/i-am-not-sharing-weed')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);
  });
  it('Responds to a get request to categories', () => {
    return mockRequest
      .get('/api/v1/categories')
      .then(results => {
        expect(results.status).toBe(200);
        expect(typeof results.body.results).toBe('object');
      });
  });
  it('Responds to a get request to api/v1/categories/:id', ()=> {
    return mockRequest
      .get('/api/v1/categories/:id')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
  it('Responds to a post request on api/v1/categories', ()=> {
    return mockRequest
      .post('/api/v1/categories')
      .then(results => {
        expect(results.status).toBe(201);
      });
  });
  it('Respond to a put request on api/v1/categories/:id', ()=> {
    return mockRequest
      .put('/api/v1/categories/:id')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
  it('Respond to a delete on api/v1/categories/:id', () => {
    return mockRequest
      .delete('/api/v1/categories/:id')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });


  it('Responds to a get request to api/v1/products', () => {
    return mockRequest
      .get('/api/v1/products')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
  it('Responds to a get request to api/v1/products/:id', ()=> {
    return mockRequest
      .get('/api/v1/products/:id')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
  it('Responds to a post request on api/v1/products', ()=> {
    return mockRequest
      .post('/api/v1/products')
      .then(results => {
        expect(results.status).toBe(201);
      });
  });
  it('Respond to a put request on api/v1/products/:id', ()=> {
    return mockRequest
      .put('/api/v1/products/:id')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
  it('Respond to a delete on api/v1/products/:id', () => {
    return mockRequest
      .delete('/api/v1/products/:id')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
});

