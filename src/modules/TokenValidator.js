/*jshint node:true */
/*jshint esnext:true */
'use strict';

const jwt = require('jsonwebtoken');
const message = require('../utils/messages');

/** validate token middleware */
module.exports.checkToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    let mes = new message.Unauthorized('Check tkeon scheme');
    res.set('Content-Type', 'application/json');
    return res.status(mes.statusCode).send(mes);
  }
  jwt.verify(token, 'Secret', (err, decoded) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      let now = Math.floor(Date.now()/1000);
      let timeToExpire = (decoded.exp - now);
      next();
    }
  });

};
