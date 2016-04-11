/*jshint node:true */
/*jshint esnext:true */

'use strict';
//external
const jwt    = require('jsonwebtoken');
const express = require('express');
//internal
const app = require('../app');
const users = require('../models/Users');
const tChecker    = require('../modules/tokenValidator');
const v1handler = require('./v1');

/**
*  API V1 endpoints
*/
const route = express.Router();

route.get('/users', v1handler.allUsers);
route.delete('/users/:id', tChecker.checkToken, v1handler.removeUser);
route.post('/login', v1handler.login);
route.post('/users/register', tChecker.checkToken, v1handler.register);
route.post('/logout', tChecker.checkToken, v1handler.logout);

module.exports = route;
