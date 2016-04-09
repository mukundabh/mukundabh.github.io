
var myAppModule = angular.module('accountingApp', ['ngRoute','ui.bootstrap']);

myAppModule.config(function($routeProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'balance/balance.html',
    controller: 'appController'
  })
});

myAppModule.controller('appController', ['$scope', function ($scope) {

}]);
