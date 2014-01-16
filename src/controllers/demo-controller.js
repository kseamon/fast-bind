'use strict';

/* Controllers */

angular.module('fastBind.demoController', []).
  controller('DemoController', ['$document', '$scope', function($document, $scope) {
    this.cookieJarName = 'Clay';
    this.cookies = [
      [
        {name: 'Chocolate chip', yumminess: 'The best'},
        {name: 'Gingerbread', yumminess: 'Pretty good'},
        {name: 'Sugar', yumminess: 'Good with sprinkles'}
      ],
      [
        {name: 'Oatmeal raising', yumminess: 'Awful'},
        {name: 'Peanut butter', yumminess: 'Nice'},
        {name: 'Snickerdoodle', yumminess: 'Pretty good'}
      ]
    ];

    this.page = 0;

    this.switchPage = function() {
      this.page = this.page === 0 ? 1 : 0;
    };

    // Simulate counts of binding types.
    // Yes, this is cheating a bit. You can prove this is accurate by adding similar code to the directives.
    this.bindOnceCount = 1; // This will never change.
    this.bindOnNotifyCount = 0; // Will increment each time a value watched by fast-bind-notifier changes.

    $scope.$watch('demoCtrl.page', function() {
      $scope.demoCtrl.bindOnNotifyCount++;
    });

    // Hacky way to count dirty checks without causing them
    var ngBindCount = 0;

    $scope.$watch(function() {
      ngBindCount++;
      
      $scope.$$postDigest(function() {
        angular.element($document[0].querySelector('#ngBindCount')).text(ngBindCount);
      });
    });
  }]);
