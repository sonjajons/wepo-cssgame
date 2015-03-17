(function () {
   'use strict';
   // this function is strict...
angular.module('evalApp')
	.controller('TeacherCreateEval', function ($scope, TeacherResources, LoginResources, $location) {

	// Question ID
	var Qnum = -1;
	var Anum = -1;

	$scope.evalForm = {
		Title: '',
		TitleEN: '',
		IntroText: '',
		IntroTextEN: '',
		CourseQuestions: [],
		TeacherQuestions: []
	};

	$scope.addCQuestion = function (type) {
		Qnum++;
		$scope.evalForm.CourseQuestions.push({
			ID: Qnum,
			Text: '',
			TextEN: '',
			ImageURL: '',
			Type: type,
			Answers: []
		});
		console.log("Qnum st: " + Qnum);
	};

	$scope.addTQuestion = function (type) {
		Qnum++;
		$scope.evalForm.TeacherQuestions.push({
			ID: Qnum,
			Text: '',
			TextEN: '',
			ImageURL: '',
			Type: type,
			Answers: []
		});
		console.log("Qnum st: " + Qnum);
	};

	$scope.addTAnswer = function (quest) {
		var answer = {
			ID: quest.Answers.length,
			Text: '',
			TextEN: '',
			ImageURL: '',
			Weight: ''
		};
		/*console.dir(answer);
		console.log("hvada spurning? " + quest);
		console.dir(quest);*/
		console.log("quest len: " + quest.Answers.length);
		quest.Answers.push(answer);
	};

	$scope.createEval = function() {
		console.log("createEval");
		console.dir($scope.evalForm);
	};

});
}());