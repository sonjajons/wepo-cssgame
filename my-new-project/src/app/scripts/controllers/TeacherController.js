(function () {
   'use strict';
   // this function is strict...
angular.module('evalApp')
	.controller('TeacherController', function ($scope, TeacherResources, LoginResources, $location) {

	// Get user to check if admin
	var userjo = LoginResources.retUser();
	$scope.newTemplate = false;

	$scope.create = function () {
		if(LoginResources.retToken !== 'undefined' && userjo.Role === 'admin'){
			$scope.newTemplate = true;
			console.log("new temp: " + $scope.newTemplate);
			$location.path('/teacher/createEval');
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

	$scope.goToPublish = function(e) {
		$location.path('/teacher/createEval/' + e.ID);
	};

});


	angular.module('evalApp').factory('TeacherResources',
		function($http) {
			var evalRet = {};
			return {
				postEvaluation: function (retEval) {
					return $http.post("http://dispatch.ru.is/h26/api/v1/evaluationtemplates", retEval);
				},
				getEvaluations: function () {
					return $http.get("http://dispatch.ru.is/h26/api/v1/evaluationtemplates");
				},
				publishEvaluation: function (sendEval) {
					console.log("sendeval:");
					console.dir(sendEval);
					return $http.post("http://dispatch.ru.is/h26/api/v1/evaluations", sendEval);
				},
				wholeEval: function (newEval) {
					evalRet = newEval;
				},
				retEval: function () {
					return evalRet;
				},
				getEvaluationID: function (ID) {
					return $http.get("http://dispatch.ru.is/h26/api/v1/evaluationtemplates/" + ID);
				}
			};
		}
	);

}());
