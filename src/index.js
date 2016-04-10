/*jshint node:true */
/*jshint esnext:true */

/**
* NOTE: This is a Temp solution for review. I am avoiding a db
*and using a few simple data objects internally for demo puposes and
*allow this to run without a specic DB connection.
*/
'use strict';
const app = require('./app');
const config = require('./config');

app.listen(process.env.PORT || config.port, function() {
  console.log('Server Listening');
});

//Listen for uncaught errors
process.on('uncaughtException', function (err) {
  console.log(err);
  //TODO trigger notifications
  process.exit(1);
});
