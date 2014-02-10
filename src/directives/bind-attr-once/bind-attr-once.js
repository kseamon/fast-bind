'use strict';

/*
 * Binds the attributes to the expression once at startup,
 * Usage: <span fast-bind-attr-once="{attr1: myExpression, attr2: myOtherExpression}"></span>
 */


angular.module('fastBind.bindAttrOnce', []).
  directive('fastBindAttrOnce', ['$parse', function($parse) {
    return {
      compile: function compile(element, attributes) {
        var expr = $parse(attributes.fastBindAttrOnce);

        return function link(scope, element) {
          var values = expr(scope);

          angular.forEach(values, function(value, key) {
            attrs.$set(key, value);
          });
        };
      }
    };
  }]);
