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

		$scope.RemoveQuestion = function(obj, tC) {
			console.dir(obj);
			console.log(tC);
			
			var ID = obj.ID;

			if(tC === 't') {
				$scope.evalForm.TeacherQuestions.splice(ID, 1);
				Qnum--;
			}
			if(tC === 'c') {
				$scope.evalForm.CourseQuestions.splice(ID, 1);
				Qnum--;
			}

			console.dir($scope.evalForm.CourseQuestions);
		};	

		$scope.RemoveAnswer = function(quest, ans, tC) {
			var IDq = quest.ID;
			var IDa = ans.ID;

			if(tC === 'c') {
				$scope.evalForm.CourseQuestions[IDq].Answers.splice(IDa, 1);
			}

			if(tC === 't') {
				$scope.evalForm.TeacherQuestions[IDq].Answers.splice(IDa, 1);
			}
		};	

		$scope.createEval = function() {

			console.log("createEval");
			console.dir($scope.evalForm);

			TeacherResources.postEvaluation($scope.evalForm)
			.success(function (data) {
				console.log("kominn aftur" + data);
				$location.path('/teacher');
			})
			.error(function () {
				console.log("ERROR POSTING EVALUATION");
			});
			//post eacherFactory.postEvalTemplate($scope.evaluation);

			//GO TO /teacher
		};

	});
}());