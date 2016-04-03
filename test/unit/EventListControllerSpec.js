"use strict";

describe("EventsListController", function(){
  var $controllerContructor
  var scope
  var mockEventData

  beforeEach(module("eventsApp"))
  beforeEach(inject(function($controller, $rootScope){
    $controllerContructor = $controller
    scope = $rootScope.$new()
    mockEventData = sinon.stub({ getAllEvents: function(){} })
  }))

  it("should set the scope events to the value of eventData.getAllEvents()", function(){
    var mockEvents = {}
    mockEventData.getAllEvents.returns(mockEvents)

    $controllerContructor("EventsListController", {
      "$scope": scope,
      "eventData": mockEventData
    })

    expect(scope.events).toBe(mockEvents)
  })
})
