(function(){
  'use strict';
  angular.module('app')
    .controller('DashCtrl', DashCtrl);

  function DashCtrl($scope, $state, StorageUtils, UserSrv, DashSrv){
    var vm = {};
    $scope.vm = vm;
    vm.borrower = StorageUtils.getSync(UserSrv.storageKey);

    //DashSrv.getAll();
    
    DashSrv.getAmountBorrowed().then(function(amount_borrowered){
      vm.amount_borrowered = amount_borrowered;
    });
    
    //vm.amount_borrowered = DashSrv.getAmountBorrowed();
    console.log("Dash Controller Loaded: " + vm.amount_borrowered);
  }
    
})();
