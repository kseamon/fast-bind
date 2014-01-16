'use strict';

/*
 * Watches the specified expression, and sends a notification to its child scopes
 * when it changes.  Used in conjunction with bind-on-notify directives, it allows
 * for bindings that update only when the watcher on this element fires.
 * Usage: <span fast-bind-notifier="myExpression"
 *              fast-bind-notifier-name="event-name"
 *              fast-bind-notifier-mode="shallow|deep|collection"></span>
 */


angular.module('fastBind.bindNotifier', []).
  directive('fastBindNotifier', ['$parse', function($parse) {
    var Mode = {
      SHALLOW: 'shallow',
      DEEP: 'deep',
      COLLECtION: 'collection'
    };

    var DEFAULT_EVENT_NAME = 'fast-bind-notify',
        DEFAULT_MODE = Mode.SHALLOW;

    return {
      scope: true,
      compile: function compile(element, attributes) {
        var expr = $parse(attributes.fastBindNotifier),
            name = attributes.fastBindNotifierName || DEFAULT_EVENT_NAME,
            mode = attributes.fastBindNotifierMode || DEFAULT_MODE;

        return function link(scope, element) {
          var handler = function handler(newValue, oldValue, scope) {
            scope.$broadcast(name, newValue, oldValue);
          };

          switch (mode) {
            case Mode.SHALLOW:
            case Mode.DEEP:
              scope.$watch(expr, handler, mode === Mode.DEEP);
              break;
            case Mode.COLLECTION:
              scope.$watchCollection(expr, handler);
              break;
            default:
              throw Error('fast-bind-notifier: Invalid mode "' + mode + '"');
          }
        };
      }
    };
  }]);
