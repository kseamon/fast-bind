'use strict';


// Declare app level module which depends on filters, and services
angular.module('fastBind', [
  'ngRoute',
  'fastBind.demoController',
  'fastBind.bindOnce',
  'fastBind.bindNotifier',
  'fastBind.bindOnNotify'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'tmpl/main.html', controller: 'DemoController as demoCtrl'});
  //$routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
