"use strict";

eventsApp.directive("repeatX", function(){
  return {
    compile: function(element, attributes) {
      for (var i = 0; i < Number(attributes.repeatX) - 1; i++) {
        element.after(element.clone().attr("repeat-x", 0))
      }
    }
  }
})
