'use strict';

//Capture the events module into the global variable eventsApp
var eventsApp = angular.module('eventsApp', ["ngResource", "ngRoute"])

  .config(function($routeProvider, $locationProvider){

    $routeProvider.when("/newEvent", {
      templateUrl: "templates/NewEvent.html",
      controller: "EditEventController"
    })

    $routeProvider.when("/events", {
      templateUrl: "templates/EventList.html",
      controller: "EventsListController"
    })

    $routeProvider.when("/event/:eventId", {
      templateUrl: "templates/EventDetail.html",
      controller: "EventController",
      resolve: {
        event: function($route, eventData) {
          return eventData.getEvent($route.current.pathParams.eventId).$promise
        }
      }
    })

    $routeProvider.when("/user", {
      templateUrl: "templates/EditProfile.html",
      controller: "EditProfileController"
    })

    $routeProvider.when("/about", {
      template: "This is a simple app to demonstrate Angular basics"
    })

    $routeProvider.when("/sampleDirective", {
      templateUrl: "templates/SampleDirective.html",
      controller: "SampleDirectiveController"
    })

    $routeProvider.otherwise({redirectTo: "/events"})

    $locationProvider.html5Mode(true)
  })
