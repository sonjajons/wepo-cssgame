(function () {
   'use strict';
   // this function is strict...
angular.module('evalApp')
	.controller('TeacherCreateEval', function ($scope, TeacherResources, LoginResources, $location) {

	// Question ID
	var Qnum = -1;

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
		quest.Answers.push(answer);
	};

	$scope.createEval = function() {
		console.log("createEval");
		console.dir($scope.evalForm);
	};

});
}());