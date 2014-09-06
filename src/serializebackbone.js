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
      memo[value.name] = [];
    }
    memo[value.name].push(value.value);
    return memo;
  };
  
  $.fn.serializeBackbone = function() {
    return _($(this).serializeArray()).reduce(reducer, {});
  };
  
}(jQuery));
