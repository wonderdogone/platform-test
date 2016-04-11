/*jshint node:true */
/*jshint esnext:true */

'use strict';
const util = require('util');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const tokenCache = require('./modules/TokenCache');
//export the app
var app = module.exports = express();

app.use(express.static(__dirname + '/static'));

/**
* off the shelf middleware
*/
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/**
* set headers
*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
* Route file for API Versioning
*/
app.use('/v1', require('./controllers/router_v1'));

/**
 * Remove a user from data by id
 * @listens module:hurler~event:snowball
 */
app.on('hash:clean', (d) => {
  console.log(d);
  tokenCache.cleanCache();
});

/**
* last middleware for error's passed on
* dont send back html in production
* we should be using error codes
*/
app.use(function(err, req, res, next) {

  res.status(err.statusCode || 500);
  res.format({
    text: function() {
      res.send(err.message);
    },

    json: function() {
      res.send(err);
    },

    html: function() {
      res.render('errors', { err: err });
    }
  });
});
