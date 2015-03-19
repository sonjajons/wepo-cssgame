(function () {
   'use strict';

angular.module('evalApp')
	.directive('evaluationQuestion', function () {
	return {
		restrict: "E",
		scope: {
			e: "=ngModel"
		},
        templateUrl: "evaluation-question.tpl.html"
	};

});

}());






	



	




	
		
	


