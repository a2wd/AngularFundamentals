"use strict";

eventsApp.controller("EventController", function($scope, $log, eventData, $anchorScroll){
  $scope.sortorder = "-upVoteCount"

  eventData.getEvent().$promise.then(function(event){
    $scope.event = event
    console.log(event)
  }).catch(function(err){
    console.log("Error: " + err)
  })

  $scope.upVoteSession = function(session) {
    session.upVoteCount++
  }

  $scope.downVoteSession = function(session) {
    if(session.upVoteCount > 0)
      session.upVoteCount--
  }

  $scope.scrollToSession = function() {
    $anchorScroll()
  }
})
