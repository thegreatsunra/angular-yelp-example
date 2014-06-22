/* ====================================
 *  app.js
 * ===================================== */

'use strict';

angular.module('yelpApp', [])
  .controller('HomeController', function($scope, $http) {
    var weatherUrl = 'http://api.openweathermap.org/data/2.5/' +
                     'forecast/daily?mode=json' +
                     '&units=imperial&cnt=1' +
                     '&callback=JSON_CALLBACK' +
                     '&q=';
    $scope.getWeather = function() {
      $http({
        method: 'JSONP',
        url: weatherUrl + $scope.city
      }).then(function(data) {
        console.log(data);
        $scope.weather = data.data;
      });

      $scope.getLocalBusinesses();
    };

    var yelpUrl = 'http://api.yelp.com/business_review_search',
        yelpKey = '**PAST YOUR YELP API KEY HERE**';

    $scope.getLocalBusinesses = function() {
      $http({
        method: 'JSONP',
        url: yelpUrl,
        params: {
          callback: 'JSON_CALLBACK',
          ywsid: yelpKey,
          location: $scope.city
        }
      }).then(function(data) {
        console.log(data);
        $scope.nearby = data.data.businesses;
      });
    };
  });
