'use strict';

/* Controllers */

angular.module('fastBind.demoController', []).
  controller('DemoController', [function() {
    this.cookieJarName = 'Clay';
    this.cookies1 = [
      {name: 'Chocolate chip', yumminess: 'The best'},
      {name: 'Gingerbread', yuminess: 'Pretty good'},
      {name: 'Sugar', yuminess: 'Good with sprinkles'}
    ];
    this.cookies2 = [
      {name: 'Oatmeal raising', yumminess: 'Awful'},
      {name: 'Peanut butter', yuminess: 'Nice'},
      {name: 'Snickerdoodle', yuminess: 'Pretty good'}
    ];

    this.page = 1;

    this.switchPage = function() {
      this.page = this.page === 1 ? 2 : 1;
    };
  }]);
