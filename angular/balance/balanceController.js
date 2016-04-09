angular.module('accountingApp').controller('balanceController', function ($scope, $http, $location, $uibModal, $log) {

  $scope.expenses = [
    {
      firstName: 'Darshan',
      lastName: 'Mukunda',
      email: 'darshan.bmg@darshan.com',
      date: '04/14/2016',
      description: 'Walmart',
      amount: 123,
      category: 'grocery'
    },
    {
      firstName: 'Bob',
      lastName: 'Marley',
      email: 'bob@marley.com',
      date: '04/15/2016',
      description: 'Sunlake Apartments',
      amount: 1800,
      category: 'rent'
    },
    {
      firstName: 'Muhammad',
      lastName: 'Ali',
      email: 'muhammad@ali.com',
      date: '04/16/2016',
      description: 'Shell fuel',
      amount: 34,
      category: 'gas'
    },
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

  $scope.editExpense = function ($index) {

    var expenseObject = {
      firstName: $scope.expenses[$index].firstName,
      lastName: $scope.expenses[$index].lastName,
      email: $scope.expenses[$index].email,
      date: $scope.expenses[$index].date,
      description: $scope.expenses[$index].description,
      amount: $scope.expenses[$index].amount,
      category: $scope.expenses[$index].category
    };

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'balance/editModal.html',
      controller: 'modalCtl',
      size: 'lg',
      resolve: {
        expense: function () {
          return expenseObject;
        }
      }
    });

    modalInstance.result.then(function (result) {
      $scope.expenses[$index] = result;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  }
});
