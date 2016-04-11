/*jshint node:true */
/*jshint esnext:true */
/**
* NOTE: This is the handlers for the version 1 API endpoints
*/
'use strict';
const app = require('../app');
const users = require('../models/Users');
const tokenCache = require('../modules/TokenCache');
const message = require('../utils/messages');

/** GET all users */
module.exports.allUsers = (req, res, next) => {
  users.listUsers((err, data) => {
    if (err) return next(err);
    res.set('Content-Type', 'application/json');
     res.status(data.statusCode).send(data.users);
  });
};

/** POST Login, returns a new valid token*/
module.exports.login = (req, res, next) => {
    users.loginUser(req.body, (err, d) => {
      if (err) return next(err);
      res.status(d.statusCode).send(d);
    });
};

/** POST register a new user */
module.exports.register = (req, res, next) => {
  tokenCache.expired(res.locals, function(err, feedback) {
    if (err) return next(err);
    if (feedback === true) {
      return res.status(400).send('YOu may need a new token');
    }
    users.registerUser(req.body, (err, d) => {
      if (err) return next(err);
      res.status(d.statusCode).send(d);
    });
  });
};

/** DELETE remove user */
module.exports.removeUser = (req, res, next) => {
  tokenCache.expired(res.locals, function(err, feedback) {
    if (err) return next(err);
    if (feedback === true) {
      return res.status(400).send('YOu may need a new token');
    }
    let id = req.params.id;
    users.deleteUser(id, (err, d) => {
      if (err) return next(err);
      res.set('Content-Type', 'application/json');
      res.status(d.statusCode).send(d);
    });
  });
};

/** POST logout user */
module.exports.logout = (req, res, next) => {
  users.logout(res.locals, (err, d) => {
    if (err) return next(err);
    res.status(200).send(d);
  });
};
