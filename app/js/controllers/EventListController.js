eventsApp.controller("EventsListController", function($scope, eventData){
  $scope.events = eventData.getAllEvents()
})
