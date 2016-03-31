"use strict";

eventsApp.controller("EventController", function($scope, $routeParams, $route, eventData){
  $scope.sortorder = "-upVoteCount"

  $scope.event = $route.current.locals.event

  $scope.upVoteSession = function(session) {
    session.upVoteCount++
  }

  $scope.downVoteSession = function(session) {
    session.upVoteCount--
  }
})
