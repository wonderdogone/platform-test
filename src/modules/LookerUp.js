/*jshint node:true */
/*jshint esnext:true */
'use strict';
// const templatesData =  require('../data/templates');
// const renderGate = require('../modules/renderGate');


const users =  require('../data/users');
const errors =  require('../utils/errors/errors');

class LookerUp {

  /**
  * @constructs LookerUp
  */
  constructor() {

  }

  findTemplateInfo(query, cbId) {
    console.log(users);
  }

  // findTemplateInfo(query, cbId) {
  //   console.log(templatesData);
  //   let {tpl, region, locale} = query;
  //   this.matchRegions(
  //     tpl.replace(/-/g, "").trim(),
  //     region,
  //     locale,
  //     locale.slice(0,2),
  //     templatesData[tpl.replace(/-/g, "").trim()],
  //     (err, lookupId) => {
  //       if (err) cbId(err, null);
  //       // a unique lookup is matchRegions + a dimension
  //       let lookup = `${lookupId}_${query.dimensions}`;
  //       console.log(lookup);
  //       GLOBAL._REDISCLIENT.get(lookup, function (err, reply) {
  //         if (err) return cbId(err, null);
  //         if(reply === null) {
  //           let er = new errors.NotFound('Missing Cache');
  //           return cbId(er, null);
  //         }
  //         let cachedStyles = JSON.parse(reply);
  //         //let setup = R.omit(['name', 'id', 'version', 'masterComponent'], gf);
  //         //TODO can cachedStyles just be the callback value????
  //         let styles ={style:cachedStyles, master:cachedStyles.masterComponent};
  //         cbId(null, styles);
  //       });
  //     }
  //   );
  //
  // }
  //
  // matchRegions(tName, tRegion, tLocale, tLanguage, tData, callback) {
  //   let results = '';
  //
  //   function job(steps){
  //     steps.forEach( (e)=>{
  //       e();
  //     });
  //     return;
  //   }
  //   //begin iteration
  //   job(
  //     new Set()
  //     .add( ()=>{
  //       //results = this.workRegions(tName, tRegion, tData);
  //       var that = this;
  //       setImmediate(function () {
  //         results = that.workRegions(tName, tRegion, tData);
  //       });
  //     } )
  //     .add( ()=>{
  //       //results = `${results}${this.workLanguages(tLanguage, tData)}`;
  //       var that = this;
  //       setImmediate(function () {
  //         results = `${results}${that.workLanguages(tLanguage, tData)}`;
  //       });
  //     } )
  //     .add( ()=>{
  //       //results = `${results}${this.workLocales(tLocale, tData)}`;
  //       var that = this;
  //       setImmediate(function () {
  //         results = `${results}${that.workLocales(tLocale, tData)}`;
  //         callback(null, results);
  //       });
  //     } )
  //   );
  // }
  //
  // workRegions(tplName, tplRegion, tplData) {
  //   if (tplData.regions.every(elem => elem !== tplRegion)) {
  //     return `${tplName}0`;
  //   }
  //   return `${tplName}${tplRegion}`;
  // }
  //
  // workLanguages(tplLanguage, tplData) {
  //   if (tplData.languages.every(elem => elem !== tplLanguage)) {
  //     return 0;
  //   }
  //   return tplLanguage;
  // }
  //
  // workLocales(tplLocale, tplData) {
  //   if (tplData.locales.every(elem => elem !== tplLocale)) {
  //     return 0;
  //   }
  //   return tplLocale;
  // }

}

module.exports = new LookerUp();
