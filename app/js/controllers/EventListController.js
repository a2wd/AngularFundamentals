eventsApp.controller("EventsListController", function($scope, $location, eventData){
  $scope.events = eventData.getAllEvents()  
})
