(function(){
  var app = angular.module('todoController', ['ngSanitize', 'ui.router']);

  app.controller("listController", ['$scope','$sce', '$state', function($scope, $sce, $state){
   
    $scope.toDoList = JSON.parse(window.localStorage.getItem('toDoList')) || [];
    $scope.completed = JSON.parse(window.localStorage.getItem('completed')) || [];
    var task = '';
   
    $scope.insert = function(keyEvent, input){
      if(keyEvent.which === 13){
        task = input.task
        $scope.toDoList.push(task);
        window.localStorage.setItem('toDoList', JSON.stringify($scope.toDoList));
        var input = document.getElementById("task");
        console.log(input);
        input.reset();
      }
    }

    $scope.remove = function(x){
      task = x;
      var index = $scope.toDoList.indexOf(task);
      $scope.completed.push($scope.toDoList.splice(index, 1)[0]);
      window.localStorage.setItem('toDoList', JSON.stringify($scope.toDoList))
      window.localStorage.setItem('completed', JSON.stringify($scope.completed)); 
    }

    $scope.changeState = function (state) {
      $state.go(state);
    };

    $scope.clear = function(){
     window.localStorage.removeItem('completed');
     $scope.completed = [];
    }

  }]);

})()
