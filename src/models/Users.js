/*jshint node:true */
/*jshint esnext:true */
'use strict';

const bcrypt = require('bcrypt');
const users =  require('../data/users/users.json');
const Actions =  require('../modules/DataActions');
const jwt    = require('jsonwebtoken');
const message = require('../utils/messages');

class Users {
  /**
  * @constructs Users
  */
  constructor() {
    this.users = users;
  }

  listUsers(cbId) {
    cbId(null, {"statusCode": 200, "users":Actions.people});
  }

  deleteUser(id, cb) {
    Actions.remove(id, (err, res) => {
      if (err) cb(err, null);
      cb(null, res);
    });
  }

  registerUser(body, cb) {
    const saltRounds = 10;
    let newObj = Object.assign({}, body);
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(newObj.password, salt, (err, hash) => {
        newObj.password = hash;
        Actions.addUser(newObj, (err, res) => {
          if (err) cb(err, null);
          cb(null, res);
        });
      });
    });
  }

  loginUser(body, cb) {
    let {name, password, id} = body;

    Actions.findById(id, (err, user) => {
      if (err) cb(err, null);
      if (user === 'missing') {
        let mes = new message.NotFound('No User');
        return cb(null, mes);
      }

      //TODO update this to compare hased passwords for 'new users'
      if (user.password !== password) {
        let mes = new message.Unauthorized('Unauthorized');
        return cb(null, mes);
      }

      //remove the password
      let payload = Object.keys(user).reduce((result, x) => {
        if (x  !== 'password') {
          result[x] = user[x];
        }
        return result;
      }, {});

      jwt.sign(payload, 'Secret', {
        expiresIn: '1h',
        issuer: 'www.webstuff.com'
      }, (token) => {
        //console.log(token);
        cb(null,
          {
            "statusCode": 200,
            "type":"Bearer",
            "access_token":token,
            "expires_in":"1h",
            "refresh_token":"kkjjdjdkaue77693f749b2fb2b0b024f"
          });
      });
    });
  }

}

module.exports = new Users();
