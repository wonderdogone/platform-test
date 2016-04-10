/*jshint node:true */
/*jshint esnext:true */
/**
* NOTE:
*/
'use strict';
const app = require('../app');
const users = require('../models/Users');

module.exports.allUsers = (req, res, next) => {
  users.listUsers((err, data) => {
    if (err) return next(err);
    res.set('Content-Type', 'application/json');
     res.status(data.statusCode).send(data.users);
  });
};

module.exports.login = (req, res, next) => {
    users.loginUser(req.body, (err, d) => {
      if (err) return next(err);
      res.status(d.statusCode).send(d);
    });
};

module.exports.register = (req, res, next) => {
  users.registerUser(req.body, (err, d) => {
    if (err) return next(err);
    // res.status(d.statusCode).send(d);
    res.status(200).send(d);
  });
};

module.exports.removeUser = (req, res, next) => {
  let id = req.params.id;
  users.deleteUser(id, (err, d) => {
    if (err) return next(err);
    res.set('Content-Type', 'application/json');
    res.status(d.statusCode).send(d);
  });
};
