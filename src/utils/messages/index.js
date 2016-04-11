/*jshint node:true */
/*jshint esnext:true */
'use strict';

const util = require('util');

function NotFound(message) {
  Error.call(this);
  this.statusCode = 404;
  this.message = message;
  this.name = 'Not Found';
}

util.inherits(NotFound, Error);

function Success(message) {
  Error.call(this);
  this.statusCode = 200;
  this.message = message;
  this.name = 'Successful Transaction';
}

util.inherits(NotFound, Error);

function Unauthorized(message) {
  Error.call(this);
  this.statusCode = 401;
  this.message = message;
  this.name = 'Unauthorized';
}

util.inherits(NotFound, Error);

function Duplicate(message) {
  Error.call(this);
  this.statusCode = 400;
  this.message = message;
  this.name = 'Duplicate';
}

util.inherits(NotFound, Error);

function LogoutSuccess(message) {
  Error.call(this);
  this.statusCode = 200;
  this.message = message;
  this.name = 'Logout';
}

util.inherits(NotFound, Error);

function Revalidate(message) {
  Error.call(this);
  this.statusCode = 200;
  this.message = message;
  this.name = 'Revalidate';
}

util.inherits(NotFound, Error);

/**
* Export these errors for use throughout the app
*/
module.exports = {
  NotFound: NotFound,
  Success: Success,
  Unauthorized: Unauthorized,
  Duplicate: Duplicate,
  LogoutSuccess: LogoutSuccess,
  Revalidate: Revalidate
};
