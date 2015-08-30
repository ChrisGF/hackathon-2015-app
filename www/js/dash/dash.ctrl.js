(function(){
  'use strict';
  angular.module('app')
    .controller('DashCtrl', DashCtrl);

  function DashCtrl($scope, $state, StorageUtils, UserSrv, DashSrv){
    var vm = {};
    $scope.vm = vm;
    vm.borrower = StorageUtils.getSync(UserSrv.storageKey);

    DashSrv.getAll();

    vm.amount_borrowered = DashSrv.amountBorrowed;
    console.log("Dash Controller Loaded: " + vm.amount_borrowed);
  }

})();
