(function(){
  'use strict';
  angular.module('app')
    .config(configure);

  function configure($stateProvider){
    $stateProvider
      .state('app.tabs.dash', {
      url: '/dash',
      views: {
        'dash-tab': {
          templateUrl: 'js/dash/dash.html',
          controller: 'DashCtrl'
        }
      }
    });
  }
})();
