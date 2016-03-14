"use strict";

eventsApp.controller("EventController", function($scope, $log, eventData){
  $scope.sortorder = "-upVoteCount"

  eventData.getEvent()
    .success(function(event) { $scope.event = event })
    .error(function(data, status, headers, config){
      $log.warn(data, status, headers(), config)
    })

  $scope.upVoteSession = function(session) {
    session.upVoteCount++
  }

  $scope.downVoteSession = function(session) {
    if(session.upVoteCount > 0)
      session.upVoteCount--
  }
})
