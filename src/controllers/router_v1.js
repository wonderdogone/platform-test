/*jshint node:true */
/*jshint esnext:true */

'use strict';
//external
const jwt    = require('jsonwebtoken');
const express = require('express');
//internal
const app = require('../app');
const users = require('../models/Users');
const middle    = require('../modules/tokenValidator');
const v1handler = require('./v1');

/**
*  API V1 endpoints
*/
const route = express.Router();


route.get('/users', v1handler.allUsers);
route.delete('/users/:id', middle.checkToken, v1handler.removeUser);
route.post('/login', middle.checkIfEmpty, v1handler.login);
route.post('/users/register', middle.checkIfEmpty, middle.checkToken, v1handler.register);
route.post('/logout', middle.checkIfEmpty, middle.checkToken, v1handler.logout);
route.put('/users/:id', middle.checkIfEmpty, middle.checkToken, v1handler.update);

module.exports = route;
