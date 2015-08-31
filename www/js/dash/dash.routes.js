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
    })
    .state('app.tabs.dash-detail', {
    url: '/dash/dash-detail',
    views: {
      'dash-tab': {
        templateUrl: 'js/dash/dash-detail.html',
        controller: 'DashCtrl'
      }
    }
  });
  }
})();
