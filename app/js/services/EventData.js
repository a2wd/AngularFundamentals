eventsApp.factory("eventData", function($resource){
  //Resource object
  var resource = $resource("data/event/:id", {id: "@id"})

  return {
    //Get function
    getEvent: function() {
      return resource.get({id:1})
    }

    //Save function
    saveEvent: function(event){
      return resource.save(event)
    }
  }
})
