/*jshint node:true */
/*jshint esnext:true */
'use strict';
const util = require('util');
const events = require('events');
const users =  require('../data/users/users.json');
const message = require('../utils/messages');
const uuid = require('uuid');

/**
 * Represents Data Actions.
 * @constructor
 */
function Actions() {
  events.EventEmitter.call(this);
  const self = this instanceof Actions ? this : Object.create(Actions.prototype);
  this.people = {};
  this.loadData();
}

util.inherits(Actions, events.EventEmitter);

//list actions in one place
var e = Actions.events = {
  delete: 'delete',
  findById: 'findById',
  addUser: 'addUser'
};

/**
 * Remove a user from data by id
 * @param {string} id - User id.
 * @param {Requester~requestCallback} cb - The callback that handles the response.
 */
Actions.prototype.remove = function(id, cb) {
  let checker = parseInt(id);

  let check = this.checkForId(checker);
  if (check === 0) {
    return setImmediate(function() {
      let mes = new message.NotFound('No id found. Nothing to do');
      cb(null, mes);
    });
  }

  //mutate
  this.people.users.forEach((n, index) => {
    if (n.id === checker) {
      this.people.users.splice( index, 1 );
    }
  });

  this.on('error', (err) => {
    console.error('Error:', err);
    return cb(err, null);
  });

  this.once(e.delete, (details) => {
    let mes = new message.Success(`The job finsihed on ${details.completedOn}`);
    cb(null, mes);
    this.removeAllListeners();
  });

  this.emit(e.delete, { completedOn: new Date() });

};

/**
 * Check user is authenticated and if so provide user
 * @param {string} id - User id.
 * @param {Requester~requestCallback} cb - The callback that handles the response.
 */
Actions.prototype.findById = function(id, cb) {
  //check is in use
  let check = this.checkForId(parseInt(id));
  if (check === 0) {
    return setImmediate(function() {
      let mes = new message.NotFound('No id found. Nothing to do');
      cb(null, mes);
    });
  }

  this.on('error', (err) => {
    return cb(err, null);
  });

  this.once(e.findById, (details) => {
    let usr = this.people.users.filter(x => {
      return x.id === id;
    });
    cb(null, usr[0]);
    this.removeAllListeners();
  });

  this.emit(e.findById);
};

Actions.prototype.addUser = function(body, cb) {

  const uid = uuid.v1();
  const len = this.people.users.length;
  let emailCheck = 0;
  for (let i = 0; i < len; i++) {
    if (this.people.users[i].email === body.email) {
      emailCheck = 1;
    }
  }

  if (emailCheck === 1) {
    return setImmediate(function() {
      let mes = new message.Duplicate('Email already taken');
      cb(null, mes);
    });
  }

  this.on('error', (err) => {
    return cb(err, null);
  });

  this.once(e.addUser, (details) => {
    let ud = {"id": uid};
    let obj = Object.assign(body, ud);
    this.people.users.push(obj);
    let mes = new message.Success(`Added user id ${uid} on ${details.completedOn}`);
    cb(null, mes);
    this.removeAllListeners();
  });

  this.emit(e.addUser, { completedOn: new Date() });
};

/** Helper Method */
/**
 * Check user id and return 0 or 1
 * @param {string} id - User id.
 * @returns {Boolean}
 */
Actions.prototype.checkForId = function(id) {
  return (function() {
    let noid = 0;
    const len = this.people.users.length;
    for (let i = 0; i < len; i++) {
      if (this.people.users[i].id === id) {
        noid = 1;
      }
    }
    return noid;
  }).bind(this)();
};

/** Loads data for manipulation */
Actions.prototype.loadData = function(id, cb) {
  return Object.assign(this.people, users);
};

module.exports = new Actions();
