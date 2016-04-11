/*jshint node:true */
/*jshint esnext:true */
'use strict';

const jwt = require('jsonwebtoken');
const message = require('../utils/messages');
const tokenCache = require('./tokenCache');

/** validate token middleware */
module.exports.checkToken = (req, res, next) => {

  if (!req.headers.authorization || req.headers.authorization === "") {
    let mes = new message.Unauthorized('Missing Credentials');
    res.set('Content-Type', 'application/json');
    return res.status(mes.statusCode).send(mes);
  }

  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    let mes = new message.Unauthorized('Check token scheme');
    res.set('Content-Type', 'application/json');
    return res.status(mes.statusCode).send(mes);
  }

  jwt.verify(token, 'Secret', (err, decoded) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      res.locals = decoded;
      next();
    }
  });

};
