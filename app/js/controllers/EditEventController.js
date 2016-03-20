"use strict";

eventsApp.controller("EditEventController", function(){
  function EditEventController($scope) {
    $scope.saveEvent = function(event) {
      eventData.saveEvent(event)
        .$promise().then(function(){
            function(res) { console.log("Success: " + res) },
            function(res) { console.log("Error: " + res) }
        })
    }

    $scope.cancelEvent = function() {
      window.location = "/EventDetails.html"
    }
  }
})
