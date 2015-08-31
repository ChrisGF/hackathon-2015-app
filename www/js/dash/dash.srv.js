(function(){
  'use strict';
  angular.module('app')
    .factory('DashSrv', DashSrv);

  // This is a dummy service to use in demo...
  DashSrv.$inject = ['$http', '$q', '$timeout', 'Utils', 'Config', '_', 'StorageUtils'];
  function DashSrv($http, $q, $timeout, Utils, Config, _, StorageUtils){
    var amount_borrowed = undefined;
    var interest_owed = undefined

    var service = {
      getAmountBorrowed: getAmountBorrowed,
      getInterestOwed: getInterestOwed
    };
    return service;

    function getAmountBorrowed() {
      return $http.get(Config.backendUrl+'/deals.json').then(function(res){
        amount_borrowed = res.data.deals[0];
        return amount_borrowed;
      });
    }

    function getInterestOwed() {
      return $http.get(Config.backendUrl+'/dashboard/interest_owed.json').then(function(res){
        interest_owed = res.data.interest_owed;
        return interest_owed;
      });
    }
  }
})();
