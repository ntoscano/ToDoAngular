(function(){
  var app = angular.module('app-directives', []);

  app.directive('navbarLink', function(){
    return{
      restrict: 'E',
      scope: {
        changeState: '='
      },
      templateUrl: "view/navbar.html",
      compile: function(tElement, tAttrs, transclude){
        return{
          pre : function (scope, iElement, iAttrs){
          },
          post: function (scope, iElement, iAttrs){
            //stuff goes here
          }
        };
      }
    };
  });

  app.directive('toDoList', function(){
    return{
      restrict: 'E',
      scope: {
        toDoList: '=',
        complete: '=',
        insert: '=',
        remove: '='
      },
      templateUrl: "view/todoContainer.html",
      compile: function(tElement, tAttrs, transclude){
        return{
          pre : function (scope, iElement, iAttrs){
          },
          post: function (scope, iElement, iAttrs){
            //stuff goes here
          }
        };
      }
    };
  });

  app.directive('completed', function(){
    return{
      restrict: 'E',
      scope: {
        toDoList: '=',
        complete: '=',
        insert: '=',
        remove: '='
      },
      templateUrl: "view/completeContainer.html",
      compile: function(tElement, tAttrs, transclude){
        return{
          pre : function (scope, iElement, iAttrs){
          },
          post: function (scope, iElement, iAttrs){
            //stuff goes here
          }
        };
      }
    };
  });
})();