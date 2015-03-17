
(function () {
   'use strict';
   // this function is strict...
angular.module('evalApp')
	.controller('StudentController', function ($scope, StudentResources, LoginResources, $location) {
	
	console.log("LOGIN TOKEN: " + LoginResources.retToken());	

	if(LoginResources.retToken !== 'undefined'){
		$scope.course = {};
		StudentResources.getCourses()
		.success(function (data){
			$scope.course = data;
		});

		
	}

	});


angular.module('evalApp').factory('StudentResources',
	function($http) {
		return {
			getCourses: function () {
				return $http.get("http://dispatch.ru.is/h26/api/v1/my/courses");
			}
		};
	});


}());

// console.log(JSON.stringify(data));

/**
 * @ngdoc function
 * @name evalWepoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the evalWepoApp
 */
