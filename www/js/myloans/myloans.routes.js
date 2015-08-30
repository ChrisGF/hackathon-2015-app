(function(){
  'use strict';
  angular.module('app')
    .config(configure);

  function configure($stateProvider){
    $stateProvider
      .state('app.myloans', {
      url: '/myloans',
      views: {
        'menuContent': {
          templateUrl: 'js/myloans/myloans.html',
          controller: 'MyLoansCtrl'
        }
      }
    })
      
  }
})();
