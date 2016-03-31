'use strict';

eventsApp.directive("dateKeys", function($compile){
  return {
    restrict: "A",
    link: function(scope, element, attrs, controller) {
      element.on("keydown", function(event){
        if(isNumericKeyCode(event.keyCode)
          || isForwardSlash(event.keyCode)
          || isNavigationKeyCode(event.keyCode)) {
            return true
          }

          //Else
          return false
      })
    }
  }

  function isNumericKeyCode (keyCode) {
    return (keyCode >= 48 && keyCode <= 57)
      || (keyCode >= 96 && keyCode <= 105)
  }

  function isForwardSlash(keyCode) {
    return keyCode === 191
  }

  function isNavigationKeyCode(keyCode) {
    switch(keyCode) {
      case 8: //backspace
      case 35: //end
      case 36: //home
      case 37: //left
      case 38: //up
      case 39: //right
      case 40: //down
      case 45: //insert
      case 46: //delete
        return true
      default:
        return false
      }
  }
})
