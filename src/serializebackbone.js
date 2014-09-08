/*
 * serializeBackbone
 * 
 *
 * Copyright (c) 2014 Clement Hallet
 * Licensed under the MIT license.
 */

(function ($) {

  var reducer = function(memo, value) {
    if(typeof memo[value.name] === 'undefined') {
      memo[value.name] = value.value;
    } else if(!Array.isArray(memo[value.name])) {
      memo[value.name] = [memo[value.name]];
    } else {
      memo[value.name].push(value.value);
    }
    
    return memo;
  };
  
  $.fn.serializeBackbone = function(options) {
    var serialized = _($(this).serializeArray()).reduce(reducer, {});
    if(options.array_as_string) {
      serialized = _(serialized).map(function(value) { 
        if(Array.isArray(value)) {
          return value.join(',');
        } else {
          return value;
        }
      });
    } else {
      return serialized;
    }
  };
  
}(jQuery));
