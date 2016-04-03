"use strict";

describe("eventDataSpec", function(){
  beforeEach(module("eventsApp"))

  it("should issue a get request to /event/11 when getEvent is called and the id is 11",
  inject(function(eventData, $httpBackend){
    $httpBackend.expectGET("data/event/11")
    $httpBackend.when("GET", "data/event/11").respond({})
    eventData.getEvent(11)
    $httpBackend.flush()

    $httpBackend.verifyNoOutstandingExpectation()
    $httpBackend.verifyNoOutstandingRequest()
  }))

  it("should return the correct data when getEvent called",
  inject(function(eventData, $httpBackend){
    $httpBackend.when("GET", "data/event/11").respond({name: "myEvent"})
    var event = eventData.getEvent(11)
    $httpBackend.flush()

    expect(event.name).toBe("myEvent")
  }))

  it("should set the id when called", inject(function(eventData, $httpBackend){
    $httpBackend.when("POST", "data/event/1").respond({})
    $httpBackend.when("GET", "data/event/count").respond({"count": 0})
    var event = {name: "testEvent"}

    eventData.saveEvent(event)
    $httpBackend.flush()
    expect(event.id).toBe(1)
  }))

  it("should send a GET request to data/event when getAllEvents is invoked",
  inject(function(eventData, $httpBackend){
    $httpBackend.when("GET", "data/event").respond([{name:"myEvent"}])
    var events = eventData.getAllEvents()
    $httpBackend.flush()

    expect(events[0].name).toBe("myEvent")
  }))
})
