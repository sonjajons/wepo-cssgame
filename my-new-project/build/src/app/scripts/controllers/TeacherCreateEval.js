(function () {
   'use strict';
   // this function is strict...
angular.module('evalApp')
	.controller('TeacherCreateEval', function ($scope, TeacherResources, LoginResources, $routeParams, $location) {

		// Question ID
		$scope.Qnum = -1;

		var evalID = $routeParams.evalID;
		console.log("evalid: " + evalID);

		$scope.elliddi = evalID;

		$scope.mja = true;

		if(evalID !== undefined){
			$scope.mja = false;
			console.log("eval ekki undefined");
			TeacherResources.getEvaluationID($scope.elliddi)
			.success(function (data) {
				console.log("eval ekki undefined og success");
				$scope.evalForm = data;
			})
			.error(function() {
				console.log("gekk ekki að sækja evaluation");
			});

		} else {
			$scope.evalForm = {
				Title: '',
				TitleEN: '',
				IntroText: '',
				IntroTextEN: '',
				CourseQuestions: [],
				TeacherQuestions: []
			};
		}

		$scope.publishTHIS = function (start, end) {

			var evId = $scope.evalForm.ID;

			var postME = {
				TemplateID: evId,
				StartDate: start,
				EndDate: end
			};

			TeacherResources.publishEvaluation(postME)
			.success(function(data) {
				// Melding um ad allt hafi gengid
				console.log("Published (Y)");
				$scope.successMessage = "You're evaluation has been published!";
				$location.path('/teacher');
			})
			.error(function(data) {
				console.log("Error í teachercontroller publishEvaluation");
			});
		};
		
		$scope.addCQuestion = function (type) {
			$scope.Qnum++;
			$scope.evalForm.CourseQuestions.push({
				ID: $scope.evalForm.CourseQuestions.length,
				Text: '',
				TextEN: '',
				ImageURL: '',
				Type: type,
				Answers: []
			});
			console.log("CourseArr: ");
			console.dir($scope.evalForm.CourseQuestions);
		};

		$scope.addTQuestion = function (type) {
			$scope.Qnum++;
			$scope.evalForm.TeacherQuestions.push({
				ID: $scope.evalForm.TeacherQuestions.length,
				Text: '',
				TextEN: '',
				ImageURL: '',
				Type: type,
				Answers: []
			});
			console.log("TeacherArr: ");
			console.dir($scope.evalForm.TeacherQuestions);
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
				console.log("Tlen: " + $scope.evalForm.TeacherQuestions.length);
				console.log("TeacherArr after del: ");
				console.dir($scope.evalForm.TeacherQuestions);
			}
			if(tC === 'c') {
				$scope.evalForm.CourseQuestions.splice(ID, 1);
				console.log("Clen:" + $scope.evalForm.CourseQuestions.length);
				console.log("CourseArr after del: ");
				console.dir($scope.evalForm.CourseQuestions);
			}
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

			TeacherResources.wholeEval($scope.evalForm);

			TeacherResources.postEvaluation($scope.evalForm)
			.success(function (data) {
				console.log("kominn aftur" + data);
				$location.path('/teacher');
			})
			.error(function () {
				console.log("ERROR POSTING EVALUATION");
			});

		};

	});
}());