(function(){
  'use strict';
  angular.module('app')
    .factory('LoanSrv', LoanSrv);

  // This is a dummy service to use in demo...
  LoanSrv.$inject = ['$http', '$q', '$timeout', 'Utils', 'Config', '_'];
  function LoanSrv($http, $q, $timeout, Utils, Config, _){
    var cachedLoans = undefined;
    var service = {
      getAll: getAll,
      get: get,
      save: save
    };
    return service;

    function getAll(){
      if(cachedLoans){
        cachedLoans.unshift(createRandomLoan());
        return $q.when(angular.copy(cachedLoans));
      } else {
        return $http.get(Config.backendUrl+'/loans.json').then(function(res){
          cachedLoans = res.data;
          return angular.copy(cachedLoans);
        });
      }
    }

    function get(id){
      return getAll().then(function(loans){
        return _.find(loans, {id: id});
      });
    }

    function save(loan){
      return asyncTmp(function(){
        var newLoan = {};
        newLoan.id = Utils.createUuid();
        newLoan.user = loan.user;
        newLoan.avatar = 'http://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png';
        newLoan.content = loan.content;
        cachedLoans.unshift(newLoan);
        return angular.copy(newLoan);
      });
    }

    function createRandomLoan(){
      var newLoan = angular.copy(cachedLoans[Math.floor(Math.random() * cachedLoans.length)]);
      newLoan.id = Utils.createUuid();
      return newLoan;
    }

    function asyncTmp(fn){
      var defer = $q.defer();
      $timeout(function(){
        defer.resolve(fn());
      }, 500);
      return defer.promise;
    }
  }
})();
