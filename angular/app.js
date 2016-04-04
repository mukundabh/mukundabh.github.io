
var myAppModule = angular.module('accountingApp', ['ngRoute']);

myAppModule.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'expense/expense.html',
    controller: 'appController'
  });
});

myAppModule.controller('appController', ['$scope', function ($scope) {

}]);
