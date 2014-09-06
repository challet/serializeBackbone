/*
 * serializeBackbone
 * 
 *
 * Copyright (c) 2014 Clement Hallet
 * Licensed under the MIT license.
 */

(function ($) {

  var reducer = function(memo, value, index, list) {
    if(typeof memo[value.name] == 'undefined')
      memo[value.name] = new Array()
    memo[value.name].push(value.value)
    return memo
  }
  
  $.fn.serializeBackbone = function() {
    return _($(this).serializeArray()).reduce(reducer, {})
  }
  
}(jQuery));
