"use strict";

eventsApp.directive("sessionList", function(){
  return {
    restrict: "E",
    templateUrl: "/templates/directives/sessionList.html",
    scope: {
      event: "="
    }
  }
})
