var app = angular.module('doodlesApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'login.html'
  })
  .when('/draw', {
    templateUrl: 'draw.html'
  })
})
