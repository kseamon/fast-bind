'use strict';

/*
 * Binds the attributes to the expression once at startup,
 * Usage: <tag fast-bind-attr-once="{attr1: 'myExpression', attr2: 'myOtherExpression'}"></tag>
 *
 * Real example:
 * e.g. we have this data: obj={url: 'http://google.com', urlTitle: 'Go Search'}
 * <a fast-bind-attr-once="{href: '{{obj.url}}', title: '{{obj.urlTitle}}'}"
 */

angular.module('fastBind.bindAttrOnce', []).
  directive('fastBindAttrOnce', ['$parse', function($parse) {
    return {
      link: function (scope, element, attrs) {
        var expr = $parse(attrs.fastBindAttrOnce);
        var values = expr(scope);
        
        angular.forEach(values, function (value, key) {
            attrs.$set(key, value);
        });
      }
    };
  }]);
