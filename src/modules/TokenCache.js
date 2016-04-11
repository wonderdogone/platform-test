/*jshint node:true */
/*jshint esnext:true */
'use strict';
const app = require('../app');

class TokenCache {
  /**
  * @constructs Users
  */
  constructor() {
    this.cache = [
      {
      id : '1460330666somemail@someemail.co',
      expired: new Date(),
      ttl: 'some amount of time'
      }
    ];
  }

  //this just simulates what should be in a memstores with a proper ttl.
  cleanCache(cbId) {
    console.log('Action: Cleaning Cache');
    //TODO: clean the list of items passed ttl
  }

  expired(token, cb) {
    let dec = `${token.iat}${token.email}`;
    let tester = this.cache.every(elem => elem.id !== dec); // true
    if (tester) {
      cb(null, false);
    } else {
      cb(null, true);
    }
  }

}

module.exports = new TokenCache();
