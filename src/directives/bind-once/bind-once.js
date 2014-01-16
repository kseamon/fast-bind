'use strict';

/*
 * Binds the to the expression once at startup,
 * Usage: <span fast-bind-once="myExpression"
 */


angular.module('fastBind.bindOnce', []).
  directive('fastBindOnce', ['$parse', function($parse) {
    return {
      compile: function compile(element, attributes) {
        var expr = $parse(attributes.fastBindOnce);

        return function link(scope, element) {
          element.text(expr(scope));
        };
      }
    };
  }]);
