"use strict";

eventsApp.controller("MainMenuController", function($scope, $location){
  $scope.createEvent = function() {
    $location.url("/newEvent")
  }

  $scope.viewEvents = function() {
    //Replace navigates without placing a page on the history stack
    $location.replace()
    $location.url("/events")
  }

  $scope.editProfile = function() {
    $location.url("/user")
  }

  $scope.sampleDirective = function() {
    $location.url("/sampleDirective")
  }

})
