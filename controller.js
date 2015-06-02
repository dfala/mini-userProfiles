var app = angular.module('userProfiles');

app.controller('appController', function ($scope, mainService) {

	var getUsers = function () {
		$scope.users = mainService.data;
		console.log($scope.users);
	}

	getUsers();
})