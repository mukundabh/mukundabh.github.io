angular.module('accountingApp').controller('balanceController', function ($scope, $http, $location) {

  $scope.expenses = [
    {
      firstName: 'Darshan',
      lastName: 'Mukunda',
      email: 'darshan.bmg@gmail.com',
      date: '2016-04-14T04:00:00.000Z',
      description: 'kzjsd',
      amount: 123,
      category: 'grocery'
    }
  ];

  $scope.addExpense = function (expense) {
    var expenseObject = {
      firstName: expense.firstName,
      lastName: expense.lastName,
      email: expense.email,
      date: expense.date,
      description: expense.description,
      amount: expense.amount,
      category: expense.category
    };
    // This method can be used to call the post api with relevant payload
    $scope.expenses.push(expenseObject);
    $scope.expenseModel = {};
  }

  $scope.deleteExpense = function ($index) {
    $scope.expenses.splice($index,1);
  };
});
