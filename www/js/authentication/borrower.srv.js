(function(){
  'use strict';
  angular.module('app').factory('Borrower', ($rootScope) {
    var borrower = undefined;

    return {
       get: function(){
         return borrower;
       },

       setUser : function(newVal){
        console.log('service old borrower:', this.borrower);
        this.borrower = newVal;
        console.log('service new borrower:', this.borrower);
        $rootScope.$broadcast("borrowerUpdated");
       }
    }
  }
})();
