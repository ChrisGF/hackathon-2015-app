(function(){
  'use strict';
  angular.module('app')
    .config(configure);

  function configure($stateProvider){
    $stateProvider
      .state('app.thanks', {
      url: '/thanks',
      views: {
        'menuContent': {
          templateUrl: 'js/thanks/thanks.html',
          controller: 'ThanksCtrl'
        }
      }
    })

  }
})();
