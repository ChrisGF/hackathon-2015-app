(function(){
  'use strict';
  angular.module('app')
    .controller('DrawCtrl', DrawCtrl);

  function DrawCtrl($scope, $state, StorageUtils, UserSrv, DealSrv){
    var vm = {};
    $scope.vm = vm;
    vm.borrower = StorageUtils.getSync(UserSrv.storageKey);
    vm.deal = DealSrv.sampleDeal();
  }    
})();
