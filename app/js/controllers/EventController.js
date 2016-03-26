"use strict";

eventsApp.controller("EventController", function($scope, $log, eventData, $anchorScroll, $cookies){
  $scope.sortorder = "-upVoteCount"

  eventData.getEvent(1).$promise.then(function(event){
    $scope.event = event
  }).catch(function(err){
    console.log("Error: " + err)
  })

  $scope.upVoteSession = function(session) {
    var voteCookie = $cookies.get(cookieId(session))
    console.log(voteCookie)
    if(voteCookie === undefined) {
      session.upVoteCount++
      $cookies.put(cookieId(session), true)
    }
    else if (voteCookie === "false") {
      session.upVoteCount += 2
      $cookies.put(cookieId(session), true)
    }
  }

  $scope.downVoteSession = function(session) {
    var voteCookie = $cookies.get(cookieId(session))
    if(voteCookie === undefined) {
      session.upVoteCount--
      $cookies.put(cookieId(session), false)
    }
    else if(voteCookie === "true") {
      session.upVoteCount -= 2
      $cookies.put(cookieId(session), false)
    }
  }

  $scope.scrollToSession = function() {
    $anchorScroll()
  }

  function cookieId(session) {
    return session.id + "-upvote"
  }
})
