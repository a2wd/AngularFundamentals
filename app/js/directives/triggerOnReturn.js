"use strict";

eventsApp.directive("triggerOnReturn", function($window){
  return {
    restrict: "A",
    link: function(scope, element, attrs, controller) {
      angular.element($window).on("keydown", function(e) {
        if(e.keyCode === 13) {
          element.submit()
        }
      })
    }
  }
})
