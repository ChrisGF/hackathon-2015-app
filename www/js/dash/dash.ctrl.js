(function(){
  'use strict';
  angular.module('app')
    .controller('DashCtrl', DashCtrl);

  function DashCtrl($scope, $state, StorageUtils, UserSrv){
    var vm = {};
    $scope.vm = vm;
    vm.borrower = StorageUtils.getSync(UserSrv.storageKey);
    
    console.log("Dash User: " + vm.borrower.gravatar_url);
  }
    
})();
