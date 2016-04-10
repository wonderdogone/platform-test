/*jshint node:true */
/*jshint esnext:true */

'use strict';
const app = require('../app');
const express = require('express');
const users = require('../models/Users');
const jwt    = require('jsonwebtoken');
const tChecker    = require('../modules/tokenValidator');
const Joi = require('joi');

/**
*  API V1 endpoints
*/
const route = express.Router();

route.get('/users', tChecker.checkToken, (req, res, next) => {
  users.listUsers((err, data) => {
    if (err) return next(err);
    res.set('Content-Type', 'application/json');
    res.status(data.statusCode).send(data.users);
  });
});

route.delete('/users/:id', tChecker.checkToken, (req, res, next) => {
  let id = req.params.id;
  users.deleteUser(id, (err, d) => {
    if (err) return next(err);
    res.set('Content-Type', 'application/json');
    res.status(d.statusCode).send(d);
  });
});

route.post('/login', (req, res, next) => {
  users.loginUser(req.body, (err, d) => {
    if (err) return next(err);
    res.status(d.statusCode).send(d);
  });
});

route.post('/users/register', tChecker.checkToken, (req, res, next) => {
  users.registerUser(req.body, (err, d) => {
    if (err) return next(err);
    // res.status(d.statusCode).send(d);
    res.status(200).send(d);
  });
});

module.exports = route;
