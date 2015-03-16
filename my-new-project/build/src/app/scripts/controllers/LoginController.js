(function () {
   "use strict";
   // this function is strict...

   angular.module('evalApp')
  .controller('LoginController', ['$scope', 'LoginResources', '$location', function ($scope, LoginResources, $location) {
	
	console.log('helli ');

	$scope.login = function () {
		if($scope.user === "" || $scope.pass === ""){
		//TODO villuskilaboð - má ekki vera tómt
		}
		else {
			LoginResources.login($scope.user, $scope.pass)
			.success(function (data) {
				if(data.User.Role === "admin") {
					//Redirect to evaluation create template
					// $location.path(/../);
					$location.path('/teacher');
				}
				else {
					// Redirect to evaluation
					$location.path('/student');
				}
				//TODO fara í kennslumatið sjálft
			})
			.error(function () {
				//TODO villuskilaboð og reyna aftur !
			});
		}  
	};

  }]);


angular.module('evalApp').factory('LoginResources',
	['$http', function($http) {
		return {
			login: function(user, pass){
				return $http.post("http://dispatch.ru.is/h26/api/v1/login", {user: user, pass: pass});
			}
		};
	}]);


}());


// console.log(JSON.stringify(data));

/**
 * @ngdoc function
 * @name evalWepoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the evalWepoApp
 */
