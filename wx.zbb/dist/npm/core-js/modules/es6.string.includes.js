// 21.1.3.7 String.prototype.includes(searchString, position = 0)
'use strict';
var $export  = require('./_export.js')
  , context  = require('./_string-context.js')
  , INCLUDES = 'includes';

$export($export.P + $export.F * require('./_fails-is-regexp.js')(INCLUDES), 'String', {
  includes: function includes(searchString /*, position = 0 */){
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});