(function(){
  'use strict';
  angular.module('app')
    .config(configure);

  function configure($stateProvider){
    $stateProvider
      .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'js/profile/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

  }
})();
