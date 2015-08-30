(function(){
  'use strict';
  angular.module('app')
    .controller('DashCtrl', DashCtrl);

  function DashCtrl($scope, $state, StorageUtils, UserSrv, DashSrv){
    var vm = {};
    $scope.vm = vm;
    vm.borrower = StorageUtils.getSync(UserSrv.storageKey);
    vm.amount_borrowered = undefined;
    vm.interest_owed = undefined;
    
    //DashSrv.getAll();
    activate();

    function activate() {
      DashSrv.getAmountBorrowed().then(function(amount_borrowered){
        vm.amount_borrowered = amount_borrowered;
      });

      DashSrv.getInterestOwed().then(function(interest_owed){
        vm.interest_owed = interest_owed;
      });
    }
    
    //vm.amount_borrowered = DashSrv.getAmountBorrowed();
    console.log("Dash Controller Loaded: " + vm.amount_borrowered);
  }
    
})();
