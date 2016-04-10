/*jshint node:true */
/*jshint esnext:true */
/**
* NOTE: This is a TEMP solution for providing MM with a static
* feedback so they can move forward with the gui. This solution
* does not handle errors well and should NEVER be promoted to prod or any
* use cases outside testing phases.
*/
'use strict';
import renderGateway from '../modules/renderGateway';


const through2 = require('through2');
const Stream = require('stream');

class Templates {

  /**
  * @constructs MainHandler
  */
  constructor() {

  }

  // allTemplates() {
  //   let s = new Stream.Readable();
  //   s.push(JSON.stringify(this.flatFiles));
  //   s.push(null);
  //
  //   let truncate = through2(function (chunk, encoding, callback) {
  //     var t = JSON.parse(chunk);
  //     t.map(n => {
  //       delete n["components"];
  //     });
  //     let p = {};
  //     p.templates = t;
  //     this.push(JSON.stringify(p));
  //     return callback();
  //   });
  //
  //   return s.pipe(truncate);
  //
  // }
  //
  // getTemplate(param) {
  //   let all =[];
  //
  //   let s = new Stream.Readable();
  //   s.push(JSON.stringify(this.flatFiles));
  //   s.push(null);
  //
  //   let findId = through2(function (chunk, encoding, callback) {
  //     let t = JSON.parse(chunk);
  //     let p = t.filter(n => {
  //       return n.id == param; //no type evaluation
  //     });
  //     this.push(JSON.stringify(p));
  //     return callback();
  //   });
  //
  //   return s.pipe(findId).pipe(this.sorterStream());
  //
  // }
  //
  // sorterStream() {
  //   let sup = this.supJson;
  //   //TODO:make this dynamic from master source
  //   let rawOrder = [
  //     'CallToAction', 'Rank', 'label', 'Small Text', 'Price Type',
  //     'Display Price', 'Price Override', 'Final Format', 'Button Position',
  //     'Label Price Color', 'Label Icon', 'Flash Sale'
  //   ]; //order matters
  //   let falser = [];
  //   let final = [];
  //
  //   return through2(function (data, encoding, cb) {
  //     let d = JSON.parse(data);
  //     //split true/false
  //     let truer = d.map(n => {
  //       return n.components;
  //     })
  //     .map(x => {
  //       return x.map((z, index) => {
  //         if(z.controlled !== true) {
  //           falser.push(z);
  //         }
  //         return z;
  //       })
  //       .filter(v => {
  //         return v.controlled === true;
  //       });
  //     });
  //     //reordering
  //     rawOrder.forEach((x, index) => {
  //       truer[0].map(n => {
  //         if (x === n.description) {
  //           final.push(n);
  //         }
  //       });
  //     });
  //     //combine
  //     final.push(...falser);
  //     d[0].components = final;
  //     this.push(JSON.stringify(d[0]));
  //     return cb();
  //   });
  // }

  // allTemplates() {
  //   let s = new Stream.Readable();
  //   s.push('hiya');
  //   s.push(null);
  //
  //   let truncate = through2(function (chunk, encoding, callback) {
  //     this.push(JSON.stringify(chunk.toString()));
  //     return callback();
  //   });
  //
  //   return s.pipe(truncate);
  //
  // }

  allTemplates() {
    
    return 'hiyou';

  }

}

module.exports = new Templates('Templates');
