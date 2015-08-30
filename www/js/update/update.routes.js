(function(){
  'use strict';
  angular.module('app')
    .config(configure);

  function configure($stateProvider){
    $stateProvider
      .state('app.tabs.update', {
      url: '/notifs',
      views: {
        'update-tab': {
          templateUrl: 'js/update/update.html',
          controller: 'UpdateCtrl'
        }
      }
    });
  }
})();
