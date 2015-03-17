(function () {
   'use strict';
   // this function is strict...
angular.module('evalApp')
	.controller('TeacherCreateEval', function ($scope, TeacherCreateEvalResources, LoginResources, $location) {

	var userjo = LoginResources.retUser();
	console.log("ROLE: " + userjo.Role);


});


	angular.module('evalApp').factory('TeacherCreateEvalResources',function($http) {});
}());