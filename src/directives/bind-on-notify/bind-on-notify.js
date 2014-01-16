'use strict';

/*
 * Binds the to the expression, dirty-checking and updating only when notified on the specified event-name,
 * Usage: <span fast-bind-on-notify="myExpression"
 *              fast-bind-on-notify-name="event-name"</span>
 */


angular.module('fastBind.bindOnNotify', []).
  directive('fastBindOnNotify', ['$parse', function($parse) {
    var DEFAULT_EVENT_NAME = 'fast-bind-notify';

    return {
      compile: function compile(element, attributes) {
        var expr = $parse(attributes.fastBindOnNotify),
            name = attributes.fastBindOnNotifyName || DEFAULT_EVENT_NAME;

        return function link(scope, element) {
          var lastValue;
          scope.$on(name, function() {
            var value = expr(scope);

            if (value !== lastValue) {
              element.text(value);
            }
            lastValue = value;
          });
        };
      }
    };
  }]);
