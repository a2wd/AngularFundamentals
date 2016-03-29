'use strict';

eventsApp.directive("eventThumbnail", function($compile){
  return {
    restrict: "E",
    replace: true,
    templateUrl: "/templates/directives/eventThumbnail.html"
  }
})
