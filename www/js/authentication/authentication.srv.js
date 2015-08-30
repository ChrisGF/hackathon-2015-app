(function(){
  'use strict';
  angular.module('app')
    .factory('AuthSrv', AuthSrv)
    .factory('AuthInterceptor', AuthInterceptor);
    

  AuthSrv.$inject = ['$http', 'UserSrv', 'StorageUtils', 'Config'];
  function AuthSrv($http, UserSrv, StorageUtils, Config){
    var user = undefined;
    var service = {
      user: user,
      login: login,
      logout: logout,
      isLogged: isLogged
    };
    return service;

    function login(credentials){
      console.log("Logging In: " + credentials.login);
      return $http.post(Config.backendUrl+'/users/sign_in.json', {
        user: {
          email: credentials.login,
          password: credentials.password
        }
      }).then(function(res){
        console.log("User Logged In: " + res.data);
        user = res.data;
        user.logged = true;
        return UserSrv.set(user).then(function(){
          return user;
        });
      });
    }

    function logout(){
      return $http.delete(Config.backendUrl+'/users/sign_out.json').then(function(){
        return UserSrv.get().then(function(user){
          user.logged = false;
          return UserSrv.set(user);
        });
      });
    }

    function isLogged(){
      var user = StorageUtils.getSync(UserSrv.storageKey);
      return user && user.logged === true;
    }
  }

  AuthInterceptor.$inject = ['$q', '$location', '$log'];
  function AuthInterceptor($q, $location, $log){
    var service = {
      request: onRequest,
      response: onResponse,
      responseError: onResponseError
    };
    return service;

    function onRequest(config){
      // add headers here if you want...
      return config;
    }

    function onResponse(response){
      return response;
    }

    function onResponseError(response){
      $log.warn('request error', response);
      if(response.status === 401 || response.status === 403){
        // user is not authenticated
        $location.path('/login');
      }
      return $q.reject(response);
    }
  }
})();
