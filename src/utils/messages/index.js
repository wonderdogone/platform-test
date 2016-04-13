/*jshint node:true */
/*jshint esnext:true */
'use strict';

const util = require('util');

function NotFound(message) {
  this.statusCode = 404;
  this.message = message;
  this.name = 'Not Found';
}

function Success(message) {
  this.statusCode = 200;
  this.message = message;
  this.name = 'Successful Transaction';
}

function Unauthorized(message) {
  this.statusCode = 401;
  this.message = message;
  this.name = 'Unauthorized';
}

function Duplicate(message) {
  this.statusCode = 400;
  this.message = message;
  this.name = 'Duplicate';
}

function LogoutSuccess(message) {
  this.statusCode = 200;
  this.message = message;
  this.name = 'Logout';
}

function Revalidate(message) {
  this.statusCode = 200;
  this.message = message;
  this.name = 'Revalidate';
}

function EmptyRequest(message) {
  this.statusCode = 400;
  this.message = message;
  this.name = 'EmptyRequest';
}


/**
* Export these errors for use throughout the app
*/
module.exports = {
  NotFound: NotFound,
  Success: Success,
  Unauthorized: Unauthorized,
  Duplicate: Duplicate,
  LogoutSuccess: LogoutSuccess,
  Revalidate: Revalidate,
  EmptyRequest: EmptyRequest
};
