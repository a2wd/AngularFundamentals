"use strict";

eventsApp.controller("EditEventController", function(){
  function EditEventController($scope) {
    $scope.saveEvent = function(event) {

    }

    $scope.cancelEvent = function() {
      window.location = "/EventDetails.html"
    }
  }
})
