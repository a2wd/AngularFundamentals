"use strict";

describe("eventThumbnail", function(){
  var el
  beforeEach(module("eventsApp"))
  beforeEach(module("/templates/directives/eventThumbnail.html"))

  beforeEach(inject(function($compile, $rootScope){
    var scope = $rootScope.$new()
    scope.event = {
      id: 0,
      name: "Angular Expo",
      date: "1/1/2015",
      time: "10:30",
      location: {
        address: "123 Test",
        city: "Test City",
        province: "Test Province"
      }
    }

    el = angular.element("<event-thumbnail event='event' />")
    $compile(el)(scope)
    $scope.digest()
  }))

  it("should bind the data", function(){
    expect(el.text()).toContain("Angular Expo")
  })
})
