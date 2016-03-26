'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder, userData) {
      
      $scope.cancel = function() {
        window.location.href = "/EventDetails.html"
      }

      $scope.getGravatarUrl = function(email) {
        return gravatarUrlBuilder.buildGravatarUrl(email);
        }

        $scope.saveUser = function(user) {
          userData.saveData(user).$promise.then(
            function(res) { console.log("Success: " + res) },
            function(res) { console.log("Error: " + res) }
          )
        }
    }
);
