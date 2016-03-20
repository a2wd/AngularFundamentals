'use strict';

//Capture the events module into the global variable eventsApp
var eventsApp = angular.module('eventsApp', ["ngResource","ngSanitize"])
  .factory("myCache", function($cacheFactory){
    return $cacheFactory("myCache", {capacity: 3})
  })
