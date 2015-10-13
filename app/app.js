
var app = angular.module('toDoList', ['ngRoute', 'ngSanitize', 'app-directives', 'todoController', 'ui.router'])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('home', {
          url: '/home',
          templateUrl: './app/view/todoContainer.html',
          controller: 'listController'
      })
      .state('completed', {
          url: '/completed',
          templateUrl: './app/view/completeContainer.html',
          controller: 'listController'
      })
  $urlRouterProvider.otherwise('/home');
}]);
 
 

