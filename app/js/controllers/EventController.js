"use strict";

eventsApp.controller("EventController", function($scope, eventData){
  $scope.sortorder = "-upVoteCount"
  $scope.snippet = "<span style='color: red'>Hi there</span>"
  $scope.myStyle = {color: "red"}
  $scope.myClass = "blue"
  $scope.boolValue = true
  $scope.buttonDisabled = true
  $scope.event = eventData.event

  $scope.upVoteSession = function(session) {
    session.upVoteCount++
  }

  $scope.downVoteSession = function(session) {
    if(session.upVoteCount > 0)
      session.upVoteCount--
  }
})
