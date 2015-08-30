(function(){
  'use strict';
  angular.module('app')
    .factory('DashSrv', DashSrv);

  // This is a dummy service to use in demo...
  DashSrv.$inject = ['$http', '$q', '$timeout', 'Utils', 'Config', '_', 'StorageUtils'];
  function DashSrv($http, $q, $timeout, Utils, Config, _, StorageUtils){
    var amountBorrowed = 0;

    var service = {
      amountBorrowed: amountBorrowed,
      getAll: getAll,
      getAmountBorrowed: getAmountBorrowed
    };
    return service;

    function getAll(){
      getAmountBorrowed()
    }
    
    function getAmountBorrowed() {
      return $http.get(Config.backendUrl+'/dashboard/amount_borrowed.json').then(function(res){
        amountBorrowed = res.data.amount_borrowed;
      });
    }
  }
})();
