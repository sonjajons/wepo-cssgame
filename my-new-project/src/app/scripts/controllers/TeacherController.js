(function () {
   'use strict';
   // this function is strict...
angular.module('evalApp')
	.controller('TeacherController', function ($scope, TeacherResources, LoginResources, $location) {
console.log("FYRIR UTAN CREATE FALLID");
var userjo = LoginResources.retUser();
console.log("TOKEN: " + LoginResources.retToken());
console.log("ROLE: " + userjo.Role);


	$scope.create = function () {
		if(LoginResources.retToken !== 'undefined' && userjo.Role === 'admin'){
			console.log("INNI I CREATE FALLINU");
			$location.path('/createEval');
		}
	};

});


	angular.module('evalApp').factory('TeacherResources',function($http) {});
}());