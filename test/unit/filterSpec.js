"use strict";

describe("Filter durations", function(){
  beforeEach(module("eventsApp"))

  it("should return 2hrs given a 2", inject(function(durationsFilter){
    expect(durationsFilter(2)).toEqual("2hrs")
  }))
})
