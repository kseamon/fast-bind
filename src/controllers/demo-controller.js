'use strict';

/* Controllers */

angular.module('fastBind.demoController', []).
  controller('DemoController', [function() {
    this.cookieJarName = 'Clay';
    this.cookies = ['Chocolate chip', 'Gingerbread', 'Sugar'];
  }]);
