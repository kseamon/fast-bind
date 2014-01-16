'use strict';

/*
 * Binds the to the expression, dirty-checking and updating only when notified on the specified event-name,
 * Usage: <span fast-bind-on-notify="myExpression"
 *              fast-bind-on-notify-name="event-name"</span>
 */


angular.module('fastBind.bind-on-notify', []).
  directive('fastBindOnNotify', ['$parse', function($parse) {
    var DEFAULT_EVENT_NAME = 'fast-bind-notify';

    return {
      compile: function compile(element, attributes) {
        var expr = $parse(attributes.fastBindOnNotify),
            name = attributes.fastBindOnNotifyName || DEFAULT_EVENT_NAME;

        return function link(scope, element) {
          scope.$on(name, function(), {
            element.text(expr(scope));
          });
        };
      }
    };
  }]);
