(function () {

  var app = angular.module('ingedex', [
    'google-maps',
    'ngRoute',
    'angular-md5',
    'ingedex.controllers',
    'ingedex.directives',
    'ingedex.filters',
    'ingedex.services',
    'chart.js'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
      })
      .when('/', {
        templateUrl: 'views/ingedex.html',
        controller: 'IngedexController'   
      })
       .when('/:type', {
        templateUrl: 'views/ingedex.html',
        controller: 'IngedexController'
      })
      .when('/ingeniero/:id', {
        templateUrl: 'views/ingeniero.html',
        controller: 'IngenieroController',
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);

})();