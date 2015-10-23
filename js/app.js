var app = angular.module('doodlesApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'login.html'
  })
  .when('/draw', {
    templateUrl: 'draw.html'
  })
  .when('/logs', {
    templateUrl: 'logs.html'
  })
  .when('/logout', {
    templateUrl: 'logout.html'
  })
})
