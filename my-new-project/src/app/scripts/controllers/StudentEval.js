(function () {
   'use strict';

angular.module('evalApp')
	.controller('StudentEval', function ($scope, StudentResources, LoginResources, $routeParams, $location) {

		$scope.courseID = $routeParams.courseID;
		$scope.semester = $routeParams.semester;
		$scope.evalID = $routeParams.evalID;

		var evalInfo = {
			course: $scope.courseID,
			semester: $scope.semester,
			evalID: $scope.evalID
		};

		StudentResources.getTeachers(evalInfo)
		.success(function(data) {
			$scope.teachersYO = data;
		})
		.error(function(data) {
			console.log("getTeachers failed");
		});

		StudentResources.getThisEval(evalInfo)
		.success(function (data) {
			$scope.evaluationYO = data;
		})
		.error(function (data) {
			console.log("getThisEval failed");
		});

		$scope.submitEval = function () {

			// TODO taka á móti evaluation og vista svör

		};
	});
}());

