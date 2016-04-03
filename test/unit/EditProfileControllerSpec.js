"use strict";

describe("EditProfileController", function(){
  var $controllerContructor
  var scope
  var mockGravatarUrlBuilder

  beforeEach(module("eventsApp"))
  beforeEach(inject(function($controller, $rootScope){
    $controllerContructor = $controller
    scope = $rootScope.$new()
    mockGravatarUrlBuilder = sinon.stub({ buildGravatarUrl: function(){} })
  }))

  it("should build the gravatar url with the given email", function(){
    $controllerContructor("EditProfileController", {
      "$scope": scope,
      "gravatarUrlBuilder": mockGravatarUrlBuilder,
      "userData": null
    })

    var email = "karma@test.com"

    scope.getGravatarUrl(email)

    expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true)
  })
})
