(function () {
   'use strict';

angular.module('evalApp')
	.controller('StudentController', function ($scope, StudentResources, LoginResources, $location) {

	if(LoginResources.retToken !== 'undefined'){
		$scope.course = {};
		StudentResources.getCourses()
		.success(function (data){
			$scope.course = data;
		});

		StudentResources.getEvals()
		.success(function (data){
			$scope.evalYO = data;
		});
	}

});


angular.module('evalApp').factory('StudentResources',
	function($http) {
		return {
			getCourses: function () {
				return $http.get("http://dispatch.ru.is/h26/api/v1/my/courses");
			},
			getEvals: function () {
				return $http.get("http://dispatch.ru.is/h26/api/v1/my/evaluations");
			},
			getThisEval: function (e) {
				console.log("inni í getthis eval í controller factory");
				return $http.get("http://dispatch.ru.is/h26/api/v1/courses/" + e.course + "/" + e.semester + "/evaluations/" + e.evalID);
			},
			getTeachers: function (e) {
				return $http.get("http://dispatch.ru.is/h26/api/v1/courses/" + e.course + "/" + e.semester + "/teachers");
			}
		};
	});


}());








