(function () {
   "use strict";

	angular.module('evalApp')
	.controller('LoginController', function ($scope, LoginResources, $location) {
	
		$scope.errorMessage = "";

		$scope.login = function () {
			LoginResources.login($scope.user, $scope.pass)
			.success(function (data) {
				
				// Saving token
				LoginResources.setToken(data.Token);
				// Saving user
				LoginResources.setUser(data.User);

				if(data.User.Role === "admin") {
					//Redirect to evaluation create template
					$location.path('/teacher');
				}
				else {
					// Redirect to evaluation
					$location.path('/student');
				}
			})
			.error(function () {
				// Login failed ==> error msg 
				$scope.errorMessage = 'Username and/or password invalid. Please try again.';
			});
		};
	});


	angular.module('evalApp').factory('LoginResources',
		function($http) {
			var token = "";
			var user = {};

			return {
				login: function(user, pass){
					return $http.post("http://dispatch.ru.is/h26/api/v1/login", {user: user, pass: pass});
				},
				setToken: function(_token) {
					token = _token;
					$http.defaults.headers.common.Authorization = 'Basic ' + token;
				},
				retToken: function () {
					return token;
				},
				setUser: function(_user) {
					user = _user;
				},
				retUser: function() {
					return user;
				}
			};
		}
	);


}());


// console.log(JSON.stringify(data));

/**
 * @ngdoc function
 * @name evalWepoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the evalWepoApp
 */
