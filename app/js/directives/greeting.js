"use strict";

eventsApp.directive("greeting", function(){
  return {
    restrict: "E",
    replace: true,
    priority: 3,
    template: "<button class='btn' ng-click='sayHello()'>Say hello</button>",
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
    priority: 3,
    //Can make a directive terminal (stop processing other directives)
    //This can override other things like ng-click() unless we make the
    //priorities negative.
    terminal: true,
    require: "greeting",
    link: function(scope, element, attr, controller) {
      controller.addGreeting("Buendia")
    }
  }
})
.directive("hebrew", function(){
  return {
    restrict: "A",
    priority: 2,
    require:"greeting",
    link: function(scope, element, attr, controller) {
      controller.addGreeting("שָׁלוֹם")
    }
  }
})
