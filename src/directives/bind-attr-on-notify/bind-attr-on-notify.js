'use strict';

/*
 * Binds the attributes to the object values, dirty-checking and updating only
 *     when notified on the specified event-name,
 * Usage: <span fast-bind-attr-on-notify="{attr1: myExpression, attr2: myOtherExpression}"
 *              fast-bind-on-notify-name="event-name"</span>
 */


angular.module('fastBind.bindAttrOnNotify', []).
  directive('fastBindAttrOnNotify', ['$parse', function($parse) {
    var DEFAULT_EVENT_NAME = 'fast-bind-notify';

    return {
      compile: function compile(element, attributes) {
        var expr = $parse(attributes.widgetsFastBindAttrsOnNotify),
            name = attributes.fastBindOnNotifyName || DEFAULT_EVENT_NAME;

        return function link(scope, element, attrs) {
          var lastValues = {};
          scope.$on(name, function() {
            var values = expr(scope);

            angular.forEach(values, function(value, key) {

              if (value !== lastValues[key]) {
                attrs.$set(key, value);
              }
              lastValues[key] = value;
            })
          });
        };
      }
    };
  }]);
