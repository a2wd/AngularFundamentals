"use strict";

eventsApp.directive("eventDetail", function(){
  return {
    restrict: "E",
    templateUrl: "/templates/directives/eventDetail.html",
    scope: {
      event: "="
    }
  }
})
