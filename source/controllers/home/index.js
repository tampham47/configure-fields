'use strict';

angular.module('site.home', []).config(function($routeProvider) {
  return $routeProvider.when('/', {
    controller: 'HomePageCtrl',
    templateUrl: 'views/home/index.html'
  });
})

.controller('HomePageCtrl', function($scope, $location) {
  console.log('HomePageCtrl');
});
