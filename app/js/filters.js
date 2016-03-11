'use strict';

eventsApp.filter("durations", function(){
  return function(duration) {
    switch(duration) {
      case 1:
        return "1 hour"
      case 2:
        return "2hrs"
      case 3:
        return "Three hours"
      case 4:
        return "Half a day"
    }
  }
})
