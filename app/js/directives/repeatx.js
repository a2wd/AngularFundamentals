"use strict";

eventsApp.directive("repeatX", function(){
  return {
    link: function(scope, element, attributes, controller) {
      for (var i = 0; i < Number(attributes.repeatX) - 1; i++) {
        element.after(element.clone().attr("repeat-x", 0))
      }
    }
  }
})
