(function(){
  'use strict';
  angular.module('app')
    .config(configure);

  function configure($stateProvider){
    $stateProvider
      .state('app.tabs.draw', {
      url: '/draw',
      views: {
        'draw-tab': {
          templateUrl: 'js/draw/draw.html',
          controller: 'DrawCtrl'
        }
      }
    });
  }
})();
