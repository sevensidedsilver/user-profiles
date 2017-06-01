angular.module('userProfiles')
.controller('profileCtrl', function( $scope , friendService) {

  friendService.getFriends().then(function(response){
    console.log(response)
    $scope.friends = response.data.friends;
  })

});
