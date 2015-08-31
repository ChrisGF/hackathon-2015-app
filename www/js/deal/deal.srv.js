(function(){
  'use strict';
  angular.module('app')
    .factory('DealSrv', DealSrv);

  // This is a dummy service to use in demo...
  DealSrv.$inject = ['$http', '$q', '$timeout', 'Utils', 'Config', '_', 'StorageUtils'];
  function DealSrv($http, $q, $timeout, Utils, Config, _, StorageUtils){
    var deal = undefined;
    var sampleAddresses = [ 
      { address: "886 Lincoln Street Lake Worth, FL 33460", lat: "33.206374", long: "-96.948087", photo: "https://atdc-hackathon.s3.amazonaws.com/sample1.jpg"},
      { address: "457 Route 7 Lake Worth, FL 33460", lat: "26.623774", long: "-80.052702", photo: "https://atdc-hackathon.s3.amazonaws.com/sample2.jpg"},
      { address: "116 Pine Street Independence, KY 41051", lat: "38.952272", long: "-84.621935", photo: "https://atdc-hackathon.s3.amazonaws.com/sample5.jpg"},
      { address: "426 Grove Avenue Yonkers, NY 10701", lat: "40.946637", long: "-73.895432", photo: "https://atdc-hackathon.s3.amazonaws.com/sample4.jpg"}
    ];
    var sampleAmounts = [50,55,60,65,70,75,80,85,90,95,100,110,130,150];

    var service = {
      getDeal: getDeal,
      sampleDeal: sampleDeal
    };
    return service;
    
    function sampleDeal() {
      var sample_address = sampleAddresses[Math.floor(Math.random()*sampleAddresses.length)]
      return {
        address: sample_address.address,
        lat: sample_address.lat,
        long: sample_address.long,
        photo: sample_address.photo,
        amount: (sampleAmounts[Math.floor(Math.random()*sampleAmounts.length)] * 1000)
      }
    }
    
    function getDeal(id) {
      return $http.get(Config.backendUrl+'/deals/' + id + '.json').then(function(res){
        deal = res.data;
        return deal;
      });
    }
  }
})();
