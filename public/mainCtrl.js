angular.module('userProfiles')
.controller('mainCtrl', function( $scope, friendService, $location ) {

	$scope.login = function( user )

	{
		console.log(user)
		friendService.login(user).then(function( response ) {
			if (response.data.userFound) {
				$location.path('/profile');
				// console.log(response)
				//$scope.currenUser = response.data;
			} else {
				alert('user not found');
			}
		});
	}

	//console.log($scope.currenUser)
	// $scope.tracer = function(){
	// 	console.log($scope.currentUser)
	// }

	//$scope.friends = currentuser.friends

});
