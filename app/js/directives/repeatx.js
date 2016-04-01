"use strict";

eventsApp.directive("repeatX", function($compile){
  return {
    link: function(scope, element, attributes, controller) {
      for (var i = 0; i < Number(attributes.repeatX) - 1; i++) {
        element.after($compile(element.clone().attr("repeat-x", 0))(scope))
      }
    }
  }
})
