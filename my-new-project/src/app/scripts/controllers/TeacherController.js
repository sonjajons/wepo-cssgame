(function () {
   'use strict';
   // this function is strict...
angular.module('evalApp')
	.controller('TeacherController', function ($scope, TeacherResources, LoginResources, $location) {

	// Get user to check if admin
	var userjo = LoginResources.retUser();

	$scope.create = function () {
		if(LoginResources.retToken !== 'undefined' && userjo.Role === 'admin'){
			$location.path('/createEval');
		}
	};


	TeacherResources.getEvaluations()
	.success(function(data){
		console.log("Great success!");
		console.dir(data);
		$scope.evalYOLO = data;
	})
	.error(function(data) {
		console.log("Error í teachercontroller getevals " + data);
	});


});


	angular.module('evalApp').factory('TeacherResources',
		function($http) {
			return {
				postEvaluation: function (retEval) {
					return $http.post("http://dispatch.ru.is/h26/api/v1/evaluationtemplates", retEval);
				},
				getEvaluations: function () {
					return $http.get("http://dispatch.ru.is/h26/api/v1/evaluationtemplates");
				}
			};
		}
	);

}());
