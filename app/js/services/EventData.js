eventsApp.factory("eventData", function($resource){
  //Resource object
  var resource = $resource("data/event/:id", {id: "@id"})
  var resource2 = $resource("data/event/count")

  return {
    //Get function
    getEvent: function(eventId) {
      return resource.get({id:eventId})
    },

    //Save function
    saveEvent: function(event){
      resource2.get(null, function(res){
        var count = res["count"]
        event.id = count + 1
        resource.save(event)
      })
    }
  }
})
