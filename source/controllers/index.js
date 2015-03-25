'use strict';

var app, categoryTop;

categoryTop = $('#header');
app = angular.module('site', [
  'ngAnimate',
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'site.templates',

  'site.home'
]);

window.onload = function() {
  return angular.bootstrap(document, ['site']);
};
