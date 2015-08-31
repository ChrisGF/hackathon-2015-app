(function(){
  'use strict';
  angular.module('app')
    .controller('ApplyCtrl', DealCtrl);
    
  function DealCtrl($scope, $state, StorageUtils, DealSrv){
    var vm = {};
    $scope.vm = vm;
    vm.deal = DealSrv.sampleDeal();

    //DashSrv.getAll();
    // activate();
    // 
    // function activate() {
    //   DashSrv.getAmountBorrowed().then(function(amount_borrowered){
    //     vm.amount_borrowered = amount_borrowered;
    //   });
    // 
    //   DashSrv.getInterestOwed().then(function(interest_owed){
    //     vm.interest_owed = interest_owed;
    //   });
    // }

    //vm.amount_borrowered = DashSrv.getAmountBorrowed();
    console.log("Deal Controller Loaded: " + vm.deal);
  }    
})();
