
(function () {
   'use strict';
   // this function is strict...
angular.module('evalApp')
	.controller('StudentController', ['$scope', 'StudentResources', '$location', function ($scope, StudentResources, $location) {
	

	}]);


	angular.module('evalApp').factory('StudentResources',['$http', function($http) {}]);
}());

// console.log(JSON.stringify(data));

/**
 * @ngdoc function
 * @name evalWepoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the evalWepoApp
 */
