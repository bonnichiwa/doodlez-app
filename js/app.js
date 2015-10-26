var app = angular.module('doodlesApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'templates/login.html'
  })
  .when('/draw', {
    templateUrl: 'templates/draw.html'
  })
  .when('/logs', {
    templateUrl: 'templates/logs.html'
  })
  .when('/logout', {
    templateUrl: 'templates/logout.html'
  })
})
