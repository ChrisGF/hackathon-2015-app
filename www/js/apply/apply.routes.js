(function(){
  'use strict';
  angular.module('app')
    .config(configure);

  function configure($stateProvider){
    $stateProvider
      .state('app.apply', {
      url: '/apply',
      views: {
        'menuContent': {
          templateUrl: 'js/apply/apply.html',
          controller: 'ApplyCtrl'
        }
      }
    });
  }
})();
