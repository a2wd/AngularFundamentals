"use strict";

describe("event registration app", function(){

  describe("events page", function(){
    beforeEach(function(){
      browser.get("http://localhost:8001/events/")
    })

    it("should have the correct title and first event", function(){
      var list = element.all(by.repeater("event in events"))
      expect(list.count()).toEqual(4)

      var titleElement = element(by.binding("event.name"))
      expect(titleElement.getText()).toEqual("Angular Boot Camp")
    })
  })

  describe("event details page", function(){
    beforeEach(function(){
      browser.get("http://localhost:8001/event/1")
    })

    it("should sort by votes", function(){
      var list = element.all(by.repeater("session in event.sessions"))

      var titleElement = list.first().element(by.binding("session.name"))
      expect(titleElement.getText()).toEqual("Directives Masterclass")
    })

    it("should have 3 elements", function() {
      var list = element.all(by.repeater("session in event.sessions"))
      expect(list.count()).toEqual(3)
    })

    it("should have 1 session when introductory is chosen", function(){
      var selectEl = element(by.model("query.level"))
      selectEl.element(by.cssContainingText("option", "Introductory")).click()

      var list = element.all(by.repeater("session in event.sessions"))
      expect(list.count()).toEqual(1)
    })

    it("should sort correctly when sortOrder is changed", function(){
      var selectEl = element(by.model("sortorder"))
      selectEl.element(by.cssContainingText("option", "Votes")).click()

      var firstSession = element.all(by.repeater("session in event.sessions")).first()
      var firstSessionName = firstSession.element(by.binding("session.name")).text()

      expect(firstSessionName).toEqual("scopes for fun and profit")
    })

    it("should increment the vote count when a session is upvoted", function(){
      element.all(by.deepCss("div.votingButton")).first().click()

      var firstVoteCount = element.all(by.binding("count")).first()
      expect(firstVoteCount.getText()).toEqual("1")
    })
  })

})
