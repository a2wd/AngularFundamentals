eventsApp.factory("userData", function($resource){
  var resource = $resource("data/user/:userName", {userName: "@userName"})

  return {
    saveData: function(user) {
      return resource.save(user)
    }
  }
})
