"use strict";

eventsApp.directive("greeting", function(){
  return {
    restrict: "E",
    replace: true,
    template: "<button class='btn' ng-click='sayHello()'>Say hello</button>",
    //Controller could be definde inline
    //Or could refer to a separate controler
    //controller: "GreetingController"

    //Or, we can define it in the element
    controller: "@",
    name: "ctrl"
  }
})

eventsApp.controller("GreetingController", function($scope){
  $scope.sayHello = function() {
    console.log("hello")
  }
})
