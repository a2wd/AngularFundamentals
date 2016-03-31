"use strict";

eventsApp.directive("greeting", function(){
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    template: "<div><button class='btn' ng-click='sayHello()'>Say hello</button><div ng-transclude></div></div>",
    controller: function($scope) {
      var greetings = ["hello"]
      $scope.sayHello = function() {
        console.log(greetings.join(", ") + "!")
      }
      this.addGreeting = function(greeting) {
        greetings.push(greeting)
      }
    }
  }
})
.directive("spanish", function(){
  return {
    restrict: "A",
    require: "^greeting",
    link: function(scope, element, attr, controller) {
      controller.addGreeting("Buendia")
    }
  }
})
.directive("hebrew", function(){
  return {
    restrict: "A",
    require: "^greeting",
    link: function(scope, element, attr, controller) {
      controller.addGreeting("שָׁלוֹם")
    }
  }
})
