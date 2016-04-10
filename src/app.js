/*jshint node:true */
/*jshint esnext:true */

/**
* NOTE
*/

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

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

// app.on('hash:created', function(d) {
//   console.log(d);
//
// });

/**
* last middleware for error's passed on
* dont send back html in production
* we should be using error codes
*/
app.use(function(err, req, res, next) {
  // if (err.name === 'NotFound') {
  //   res.status(err.statusCode);
  //   res.format({
  //     text: function() {
  //       res.send(err.message);
  //     }
  //   });
  //   return;
  // }
  //
  // if(err.code === 'NoSuchKey') {
  //   return needle.get('http://localhost:3000/v1/some4?region=eu&price_discount=&price_plus=&price=%2459.99&text=From&type=Full%20Game&store=games&quality=100&format%5B%5D=PS3&cta=New%20Release!&backplate=http://localhost:3000/temp/bsi380x380.jpg&dimensions=380x380&tpl=banner-mobile-store&locale=en-us&store=game', function(err, resp) {
  //     res.set('Content-Type', 'image/png');
  //     res.status(200).send(resp.body);
  //   });
  // }

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
