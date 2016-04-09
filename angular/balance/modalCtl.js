angular.module('accountingApp').controller('modalCtl', function ($scope, $uibModalInstance, expense) {

  $scope.expense = expense;

  $scope.ok = function () {
    $uibModalInstance.close($scope.expense);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
