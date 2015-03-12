'use strict';

// Declare app level module which depends on views, and components
angular.module('WeBet2Win', [
  'ngRoute',
  'ngResource'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/views/'});
}]);
