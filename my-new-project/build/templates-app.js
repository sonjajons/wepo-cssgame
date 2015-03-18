angular.module('templates-app', ['login.html', 'studenthome.html', 'teachercreate.html', 'teacherhome.html']);

angular.module("login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>TeachingEvaluation</h1>\n" +
    "  <p class=\"lead\">\n" +
    "    Please log in with RU credentials\n" +
    "  </p>\n" +
    "  <div class=\"alert alert-danger\" ng-cloak ng-show=\"errorMessage != ''\">\n" +
    "    {{errorMessage}}\n" +
    "  </div>\n" +
    "  <div class=\"form-group\">\n" +
    "          <span><label for=\"user\" class=\"control-label\">Username:</label></span>\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"user\" name=\"user\" ng-model=\"user\" required=\"required\"/>\n" +
    "  </div>\n" +
    "  <div class=\"form-group\">\n" +
    "          <span><label for=\"pass\" class=\"control-label\">Password:</label></span>\n" +
    "          <input type=\"password\" class=\"form-control\" id=\"pass\" name=\"pass\" ng-model=\"pass\" />\n" +
    "  </div>\n" +
    "  <p><a class=\"btn btn-lg btn-info\" ng-click=\"login()\">Log In</a></p>\n" +
    "</div>\n" +
    "");
}]);

angular.module("studenthome.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("studenthome.html",
    "<div class=\"jumbotron\">\n" +
    "	<h2>Student's view</h2>\n" +
    "\n" +
    "	<p class=\"lead\">\n" +
    "		Courses:\n" +
    "	</p>\n" +
    "\n" +
    "	<ul>\n" +
    "		<li ng-repeat=\"c in course\"> {{c.Name}} </li>\n" +
    "	</ul>\n" +
    "</div>");
}]);

angular.module("teachercreate.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("teachercreate.html",
    "<div class=\"jumbotron\">\n" +
    "	<h2>Create Evaluation</h2>\n" +
    "  \n" +
    "	<p class=\"lead\">\n" +
    "		Please fill in form\n" +
    "	</p>\n" +
    "\n" +
    "	<!--<p><a class=\"btn btn-lg btn-info\" ng-click=\"\">Create evaluation</a></p> -->\n" +
    "\n" +
    "	<div class=\"form-group\">\n" +
    "        <span><label for=\"Title\" class=\"control-label\">Title:</label></span>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"Title\" name=\"Title\" ng-model=\"evalForm.Title\"/>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <span><label for=\"TitleEN\" class=\"control-label\">English Title:</label></span>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"TitleEN\" name=\"TitleEN\" ng-model=\"evalForm.TitleEN\"/>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <span><label for=\"IntroText\" class=\"control-label\">Introduction:</label></span>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"IntroText\" name=\"IntroText\" ng-model=\"evalForm.IntroText\"/>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <span><label for=\"IntroTextEN\" class=\"control-label\">English Introduction:</label></span>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"IntroTextEN\" name=\"IntroTextEN\" ng-model=\"evalForm.IntroTextEN\" required/>\n" +
    "    </div>\n" +
    "        </br>\n" +
    "        <!-- CourseQuestions -->\n" +
    "        <div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "				<h3 class=\"panel-title\">Course Questions</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "				<div class=\"form-group\">\n" +
    "					<button class=\"btn btn-info\" ng-click=\"addCQuestion('text')\"> Text </button>\n" +
    "					<div ng-repeat=\"c in evalForm.CourseQuestions\" ng-show=\"c.Type === 'text'\">\n" +
    "						<input type=\"text\" id=\"CourseQtext\" ng-model=\"c.Text\" placeholder=\"Titill\" required=\"required\"/>\n" +
    "						<input type=\"text\" id=\"CourseQtextEN\" ng-model=\"c.TextEN\" placeholder=\"Title\" required=\"required\"/>\n" +
    "						<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveQuestion(c, 'c')\">Delete</button>\n" +
    "\n" +
    "					</div>\n" +
    "				</div>\n" +
    "					\n" +
    "				<div class=\"form-group\">\n" +
    "					<button class=\"btn btn-info\" ng-click=\"addCQuestion('single')\"> Single Choice </button>\n" +
    "					<div ng-repeat=\"c in evalForm.CourseQuestions\">\n" +
    "						<div ng-show=\"c.Type === 'single'\">\n" +
    "							<input type=\"text\" id=\"CourseQtext\" ng-model=\"c.Text\" placeholder=\"Titill\"/>\n" +
    "							<input type=\"text\" id=\"CourseQtextEN\" ng-model=\"c.TextEN\" placeholder=\"Title\"/>\n" +
    "							<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveQuestion(c, 'c')\">Delete</button>\n" +
    "\n" +
    "							<button class=\"btn btn-info\" ng-click=\"addTAnswer(c)\"> Add answer </button>\n" +
    "							<div ng-repeat=\"a in c.Answers\">\n" +
    "								<input type=\"text\" id=\"CourseQtext\" ng-model=\"a.Text\" placeholder=\"Titill\"/>\n" +
    "								<input type=\"text\" id=\"CourseQtextEN\" ng-model=\"a.TextEN\" placeholder=\"Title\"/>\n" +
    "								<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveAnswer(c, a, 'c')\">Delete</button>\n" +
    "\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"form-group\">\n" +
    "					<button class=\"btn btn-info\" ng-click=\"addCQuestion('multiple')\"> Multiple Choice </button>\n" +
    "					<div ng-repeat=\"c in evalForm.CourseQuestions\">\n" +
    "						<div ng-show=\"c.Type === 'multiple'\">\n" +
    "							<input type=\"text\" id=\"CourseQtext\" ng-model=\"c.Text\" placeholder=\"Titill\" />\n" +
    "							<input type=\"text\" id=\"CourseQtextEN\" ng-model=\"c.TextEN\" placeholder=\"Title\"/>\n" +
    "							<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveQuestion(c, 'c')\">Delete</button>\n" +
    "\n" +
    "							<button class=\"btn btn-info\" ng-click=\"addTAnswer(c)\"> Add answer </button>\n" +
    "							<div ng-repeat=\"a in c.Answers\">\n" +
    "								<input type=\"text\" id=\"CourseQtext\" ng-model=\"a.Text\" placeholder=\"Titill\"/>\n" +
    "								<input type=\"text\" id=\"CourseQtextEN\" ng-model=\"a.TextEN\" placeholder=\"Title\"/>\n" +
    "								<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveAnswer(c, a, 'c')\">Delete</button>\n" +
    "\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "	    <!-- TeacherQuestions -->\n" +
    "	    <div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "				<h3 class=\"panel-title\">Teacher Questions</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "				<div class=\"form-group\">\n" +
    "					<button class=\"btn btn-info\" ng-click=\"addTQuestion('text')\"> Text </button>\n" +
    "					<div ng-repeat=\"t in evalForm.TeacherQuestions\" ng-show=\"t.Type === 'text'\">\n" +
    "						<input type=\"text\" id=\"TeacherQtext\" ng-model=\"t.Text\" placeholder=\"Titill\"/>\n" +
    "						<input type=\"text\" id=\"TeacherQtextEN\" ng-model=\"t.TextEN\" placeholder=\"Title\"/>\n" +
    "						<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveQuestion(t, 't')\">Delete</button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"form-group\">\n" +
    "					<button class=\"btn btn-info\" ng-click=\"addTQuestion('single')\"> Single Choice </button>\n" +
    "					<div ng-repeat=\"t in evalForm.TeacherQuestions\">\n" +
    "						<div ng-show=\"t.Type === 'single'\">\n" +
    "							Question\n" +
    "							<input type=\"text\" id=\"TeacherQtext\" ng-model=\"t.Text\" placeholder=\"Titill\"/>\n" +
    "							<input type=\"text\" id=\"TeacherQtextEN\" ng-model=\"t.TextEN\" placeholder=\"Title\"/>\n" +
    "							<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveQuestion(t, 't')\">Delete</button>\n" +
    "\n" +
    "							<button class=\"btn btn-info\" ng-click=\"addTAnswer(t)\"> Add answer </button>\n" +
    "							<div ng-repeat=\"a in t.Answers\">\n" +
    "							Answers\n" +
    "								<input type=\"text\" id=\"TeacherQtext\" ng-model=\"a.Text\" placeholder=\"Titill\"/>\n" +
    "								<input type=\"text\" id=\"TeacherQtextEN\" ng-model=\"a.TextEN\" placeholder=\"Title\"/>\n" +
    "								<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveAnswer(t, a, 't')\">Delete</button>\n" +
    "\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"form-group\">\n" +
    "					<button class=\"btn btn-info\" ng-click=\"addTQuestion('multiple')\"> Multiple Choice </button>\n" +
    "					<div ng-repeat=\"t in evalForm.TeacherQuestions\">\n" +
    "						<div ng-show=\"t.Type === 'multiple'\">\n" +
    "							<input type=\"text\" id=\"TeacherQtext\" ng-model=\"t.Text\" placeholder=\"Titill\" />\n" +
    "							<input type=\"text\" id=\"TeacherQtextEN\" ng-model=\"t.TextEN\" placeholder=\"Title\"/>\n" +
    "							<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveQuestion(t, 't')\">Delete</button>\n" +
    "\n" +
    "							<button class=\"btn btn-info\" ng-click=\"addTAnswer(t)\"> Add answer </button>\n" +
    "							<div ng-repeat=\"a in t.Answers\">\n" +
    "								<input type=\"text\" id=\"TeacherQtext\" ng-model=\"a.Text\" placeholder=\"Titill\"/>\n" +
    "								<input type=\"text\" id=\"TeacherQtextEN\" ng-model=\"a.TextEN\" placeholder=\"Title\"/>\n" +
    "								<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveAnswer(t, a, 't')\">Delete</button>\n" +
    "\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<button type=\"button\" class=\"btn btn-info\" ng-click=\"createEval()\">Submit</button>\n" +
    "\n" +
    "</div>");
}]);

angular.module("teacherhome.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("teacherhome.html",
    "<div class=\"jumbotron\">\n" +
    "	<h2>Teacher's view</h2>\n" +
    "\n" +
    "	<p><a class=\"btn btn-lg btn-info\" ng-click=\"create()\">Create evaluation</a></p>\n" +
    "\n" +
    "\n" +
    "	<p class=\"lead\">\n" +
    "		List of evaluations\n" +
    "	</p>\n" +
    "\n" +
    "	<ul>\n" +
    "		<li ng-repeat=\"e in evalYOLO\"> {{e.Title}} </li>\n" +
    "	</ul>\n" +
    "\n" +
    "</div>");
}]);
