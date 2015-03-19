angular.module('templates-app', ['createTemplate.html', 'login.html', 'studenteval.html', 'studenthome.html', 'teachercreate.html', 'teacherhome.html']);

angular.module("createTemplate.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("createTemplate.html",
    "<div class=\"jumbotron\">\n" +
    "	<h2>Create Template</h2>\n" +
    "  \n" +
    "	<p class=\"lead\">\n" +
    "		Please choose fields for evaluations\n" +
    "	</p>\n" +
    "\n" +
    "	<!--<p><a class=\"btn btn-lg btn-info\" ng-click=\"\">Create evaluation</a></p> -->\n" +
    "\n" +
    "	<div class=\"form-group\">\n" +
    "        <span><label for=\"Title\" class=\"control-label\">Title:</label></span>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"Title\" name=\"Title\" ng-model=\"evalForm.Title\" ng-hide=\"!newTemplate\"/>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <span><label for=\"TitleEN\" class=\"control-label\">English Title:</label></span>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"TitleEN\" name=\"TitleEN\" ng-model=\"evalForm.TitleEN\" ng-hide=\"!newTemplate\"/>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <span><label for=\"IntroText\" class=\"control-label\">Introduction:</label></span>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"IntroText\" name=\"IntroText\" ng-model=\"evalForm.IntroText\" ng-hide=\"!newTemplate\"/>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <span><label for=\"IntroTextEN\" class=\"control-label\">English Introduction:</label></span>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"IntroTextEN\" name=\"IntroTextEN\" ng-model=\"evalForm.IntroTextEN\" ng-hide=\"!newTemplate\"/>\n" +
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
    "					<span ng-hide=\"newTemplate\">Text question {{c.ID}}</span>\n" +
    "						<input type=\"text\" id=\"CourseQtext\" ng-model=\"c.Text\" placeholder=\"Titill\" ng-hide=\"!newTemplate\"/>\n" +
    "						<input type=\"text\" id=\"CourseQtextEN\" ng-model=\"c.TextEN\" placeholder=\"Title\" ng-hide=\"!newTemplate\"/>\n" +
    "						<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveQuestion(c, 'c')\">Delete</button>\n" +
    "\n" +
    "					</div>\n" +
    "				</div>\n" +
    "					\n" +
    "				<div class=\"form-group\">\n" +
    "					<button class=\"btn btn-info\" ng-click=\"addCQuestion('single')\"> Single Choice </button>\n" +
    "					<div ng-repeat=\"c in evalForm.CourseQuestions\">\n" +
    "						<div ng-show=\"c.Type === 'single'\">\n" +
    "							<span ng-hide=\"newTemplate\">Single choice question {{c.ID}}</span>\n" +
    "							<input type=\"text\" id=\"CourseQtext\" ng-model=\"c.Text\" placeholder=\"Titill\" ng-hide=\"!newTemplate\"/>\n" +
    "							<input type=\"text\" id=\"CourseQtextEN\" ng-model=\"c.TextEN\" placeholder=\"Title\" ng-hide=\"!newTemplate\"/>\n" +
    "							<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveQuestion(c, 'c')\">Delete</button>\n" +
    "\n" +
    "							<button class=\"btn btn-info\" ng-click=\"addTAnswer(c)\"> Add answer </button>\n" +
    "							<div ng-repeat=\"a in c.Answers\">\n" +
    "								<span ng-hide=\"newTemplate\">Answer {{a.ID}}</span>\n" +
    "								<input type=\"text\" id=\"CourseQtext\" ng-model=\"a.Text\" placeholder=\"Titill\" ng-hide=\"!newTemplate\"/>\n" +
    "								<input type=\"text\" id=\"CourseQtextEN\" ng-model=\"a.TextEN\" placeholder=\"Title\" ng-hide=\"!newTemplate\"/>\n" +
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
    "							<span ng-hide=\"newTemplate\">Multiple choice question {{c.ID}}</span>\n" +
    "							<input type=\"text\" id=\"CourseQtext\" ng-model=\"c.Text\" placeholder=\"Titill\" />\n" +
    "							<input type=\"text\" id=\"CourseQtextEN\" ng-model=\"c.TextEN\" placeholder=\"Title\"/>\n" +
    "							<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveQuestion(c, 'c')\">Delete</button>\n" +
    "\n" +
    "							<button class=\"btn btn-info\" ng-click=\"addTAnswer(c)\"> Add answer </button>\n" +
    "							<div ng-repeat=\"a in c.Answers\">\n" +
    "								<span ng-hide=\"newTemplate\">Answer {{a.ID}}</span>\n" +
    "								<input type=\"text\" id=\"CourseQtext\" ng-model=\"a.Text\" placeholder=\"Titill\" ng-hide=\"!newTemplate\"/>\n" +
    "								<input type=\"text\" id=\"CourseQtextEN\" ng-model=\"a.TextEN\" placeholder=\"Title\" ng-hide=\"!newTemplate\"/>\n" +
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
    "          <input type=\"text\" class=\"form-control\" id=\"user\" name=\"user\" ng-model=\"user\" required=\"required\" autofocus/>\n" +
    "  </div>\n" +
    "  <div class=\"form-group\">\n" +
    "          <span><label for=\"pass\" class=\"control-label\">Password:</label></span>\n" +
    "          <input type=\"password\" class=\"form-control\" id=\"pass\" name=\"pass\" ng-model=\"pass\" />\n" +
    "  </div>\n" +
    "  <p><a class=\"btn btn-lg btn-info\" ng-click=\"login()\">Log In</a></p>\n" +
    "</div>\n" +
    "");
}]);

angular.module("studenteval.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("studenteval.html",
    "<div class=\"jumbotron\">\n" +
    "	<h2>Evaluation</h2>\n" +
    "\n" +
    "	<p class=\"lead\">\n" +
    "		Please fill in form\n" +
    "	</p>\n" +
    "\n" +
    "	<p>Course Questions: </p>\n" +
    "	<div class=\"form-group\">\n" +
    "		<ul>\n" +
    "			<div ng-repeat=\"e in evaluationYO.CourseQuestions\"> \n" +
    "				<evaluation-question ng-model=\"e\"></evaluation-question>\n" +
    "			</div>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "\n" +
    "	<p>Teacher Questions</p>\n" +
    "	<div class=\"form-group\">\n" +
    "		<ul ng-repeat=\"t in teachersYO\">\n" +
    "			<p id=\"teacherName\"> {{t.FullName}} </p>\n" +
    "			<div ng-repeat=\"e in evaluationYO.TeacherQuestions\"> \n" +
    "				<evaluation-question ng-model=\"e\"></evaluation-question>\n" +
    "			</div>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "\n" +
    "	</br>\n" +
    "	<button type=\"button\" class=\"btn btn-info\" ng-click=\"submitEval()\">Submit</button>\n" +
    "	\n" +
    "</div>");
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
    "	<ul id=\"evals\">\n" +
    "		<li ng-repeat=\"c in course\"> {{c.Name}} </li>\n" +
    "	</ul>\n" +
    "\n" +
    "	<p class=\"lead\">\n" +
    "		Evaluations:\n" +
    "	</p>\n" +
    "	<ul id=\"evals\">\n" +
    "		<li ng-repeat=\"e in evalYO\"> \n" +
    "			<a href=\"#/student/evaluation/{{ e.CourseID }}/20151/{{ e.ID }}\"> {{e.CourseID}} - {{e.TemplateName}}</a>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "</div>");
}]);

angular.module("teachercreate.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("teachercreate.html",
    "<div class=\"jumbotron\">\n" +
    "	\n" +
    "\n" +
    "	<div ng-show=\"!mja\">\n" +
    "		<h2>Publish Evaluation</h2>\n" +
    "\n" +
    "		<p class=\"lead\">\n" +
    "			View evaluation before publishing\n" +
    "		</p>\n" +
    "		\n" +
    "		<p>Title: {{evalForm.Title}}</p>\n" +
    "		<p>English title: {{evalForm.TitleEN}}</p>\n" +
    "		<p>Introduction: {{evalForm.IntroText}}</p>\n" +
    "		<p>English Introduction: {{evalForm.IntroTextEN}}</p>\n" +
    "		<p>Course Questions</p>\n" +
    "		<div ng-repeat=\"c in evalForm.CourseQuestions\" ng-show=\"c.Type === 'text'\">\n" +
    "			<p>Text question: {{c.Text}}</p>\n" +
    "			<p>Text question: {{c.TextEN}}</p>\n" +
    "		</div>\n" +
    "		<div ng-repeat=\"c in evalForm.CourseQuestions\" ng-show=\"c.Type === 'single'\">\n" +
    "			<p>Single choice question: {{c.Text}}</p>\n" +
    "			<p>Single choice question: {{c.TextEN}} </p>\n" +
    "			<div ng-repeat=\"a in c.Answers\">\n" +
    "				<p>Answer: {{a.Text}}</p>\n" +
    "				<p>Answer: {{a.TextEN}}</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div ng-repeat=\"c in evalForm.CourseQuestions\" ng-show=\"c.Type === 'multiple'\">\n" +
    "			<p>Single choice question: {{c.Text}}</p>\n" +
    "			<p>Single choice question: {{c.TextEN}} </p>\n" +
    "			<div ng-repeat=\"a in c.Answers\">\n" +
    "				<p>Answer: {{a.Text}}</p>\n" +
    "				<p>Answer: {{a.TextEN}}</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<p>Teacher Questions </p>\n" +
    "		<div ng-repeat=\"t in evalForm.TeacherQuestions\" ng-show=\"t.Type === 'text'\">\n" +
    "			<p>Text question {{t.ID}}: {{t.Text}}</p>\n" +
    "			<p>Text question {{t.ID}}: {{t.TextEN}}</p>\n" +
    "		</div>\n" +
    "		<div ng-repeat=\"t in evalForm.TeacherQuestions\" ng-show=\"t.Type === 'single'\">\n" +
    "			<p>Single choice question: {{t.Text}}</p>\n" +
    "			<p>Single choice question: {{t.TextEN}} </p>\n" +
    "			<div ng-repeat=\"a in t.Answers\">\n" +
    "				<p>Answer: {{a.Text}}</p>\n" +
    "				<p>Answer: {{a.TextEN}}</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div ng-repeat=\"t in evalForm.TeacherQuestions\" ng-show=\"t.Type === 'multiple'\">\n" +
    "			<p>Single choice question: {{t.Text}}</p>\n" +
    "			<p>Single choice question: {{t.TextEN}} </p>\n" +
    "			<div ng-repeat=\"a in t.Answers\">\n" +
    "				<p>Answer: {{a.Text}}</p>\n" +
    "				<p>Answer: {{a.TextEN}}</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div> \n" +
    "			StartDate: <input type=\"datetime-local\" id=\"start\" ng-model=\"start\"/> EndDate: <input type=\"datetime-local\" id=\"start\" ng-model=\"end\"/> \n" +
    "		</div>\n" +
    "\n" +
    "		<button class=\"btn btn-info\" ng-click=\"publishTHIS(start, end)\"> PUBLISH </button>\n" +
    "\n" +
    "\n" +
    "	</div>\n" +
    "	<div ng-show=\"mja\">\n" +
    "		<h2>Create Evaluation</h2>\n" +
    "\n" +
    "		<p class=\"lead\">\n" +
    "		Please fill in form\n" +
    "		</p>\n" +
    "\n" +
    "		<div class=\"form-group\">\n" +
    "	        <span><label for=\"Title\" class=\"control-label\">Title:</label></span>\n" +
    "	        <input type=\"text\" class=\"form-control\" id=\"Title\" name=\"Title\" ng-model=\"evalForm.Title\"/>\n" +
    "	    </div>\n" +
    "	    <div class=\"form-group\">\n" +
    "	        <span><label for=\"TitleEN\" class=\"control-label\">English Title:</label></span>\n" +
    "	        <input type=\"text\" class=\"form-control\" id=\"TitleEN\" name=\"TitleEN\" ng-model=\"evalForm.TitleEN\"/>\n" +
    "	    </div>\n" +
    "	    <div class=\"form-group\">\n" +
    "	        <span><label for=\"IntroText\" class=\"control-label\">Introduction:</label></span>\n" +
    "	        <input type=\"text\" class=\"form-control\" id=\"IntroText\" name=\"IntroText\" ng-model=\"evalForm.IntroText\"/>\n" +
    "	    </div>\n" +
    "	    <div class=\"form-group\">\n" +
    "	        <span><label for=\"IntroTextEN\" class=\"control-label\">English Introduction:</label></span>\n" +
    "	        <input type=\"text\" class=\"form-control\" id=\"IntroTextEN\" name=\"IntroTextEN\" ng-model=\"evalForm.IntroTextEN\" required/>\n" +
    "	    </div>\n" +
    "	        </br>\n" +
    "	        <!-- CourseQuestions -->\n" +
    "	        <div class=\"panel panel-default\">\n" +
    "				<div class=\"panel-heading\">\n" +
    "					<h3 class=\"panel-title\">Course Questions</h3>\n" +
    "				</div>\n" +
    "				<div class=\"panel-body\">\n" +
    "					<div class=\"form-group\">\n" +
    "						<button class=\"btn btn-info\" ng-click=\"addCQuestion('text')\"> Text </button>\n" +
    "						<div ng-repeat=\"c in evalForm.CourseQuestions\" ng-show=\"c.Type === 'text'\">\n" +
    "						<span>Text question {{c.ID}}: </span>\n" +
    "							<input type=\"text\" id=\"CourseQtext\" ng-model=\"c.Text\" placeholder=\"Titill\" required=\"required\"/>\n" +
    "							<input type=\"text\" id=\"CourseQtextEN\" ng-model=\"c.TextEN\" placeholder=\"Title\" required=\"required\"/>\n" +
    "							<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveQuestion(c, 'c')\">Delete</button>\n" +
    "\n" +
    "						</div>\n" +
    "					</div>\n" +
    "						\n" +
    "					<div class=\"form-group\">\n" +
    "						<button class=\"btn btn-info\" ng-click=\"addCQuestion('single')\"> Single Choice </button>\n" +
    "						<div ng-repeat=\"c in evalForm.CourseQuestions\">\n" +
    "							<div ng-show=\"c.Type === 'single'\">\n" +
    "							<span>Single choice question {{c.ID}}: </span>\n" +
    "								<input type=\"text\" id=\"CourseQtext\" ng-model=\"c.Text\" placeholder=\"Titill\"/>\n" +
    "								<input type=\"text\" id=\"CourseQtextEN\" ng-model=\"c.TextEN\" placeholder=\"Title\"/>\n" +
    "								<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveQuestion(c, 'c')\">Delete</button>\n" +
    "\n" +
    "								<button class=\"btn btn-info\" ng-click=\"addTAnswer(c)\"> Add answer </button>\n" +
    "								<div ng-repeat=\"a in c.Answers\">\n" +
    "								<span>Answer {{a.ID}}: </span>\n" +
    "									<input type=\"text\" id=\"CourseQtext\" ng-model=\"a.Text\" placeholder=\"Titill\"/>\n" +
    "									<input type=\"text\" id=\"CourseQtextEN\" ng-model=\"a.TextEN\" placeholder=\"Title\"/>\n" +
    "									<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveAnswer(c, a, 'c')\">Delete</button>\n" +
    "\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"form-group\">\n" +
    "						<button class=\"btn btn-info\" ng-click=\"addCQuestion('multiple')\"> Multiple Choice </button>\n" +
    "						<div ng-repeat=\"c in evalForm.CourseQuestions\">\n" +
    "							<div ng-show=\"c.Type === 'multiple'\">\n" +
    "							<span>Multiple choice question {{c.ID}}: </span>\n" +
    "								<input type=\"text\" id=\"CourseQtext\" ng-model=\"c.Text\" placeholder=\"Titill\" />\n" +
    "								<input type=\"text\" id=\"CourseQtextEN\" ng-model=\"c.TextEN\" placeholder=\"Title\"/>\n" +
    "								<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveQuestion(c, 'c')\">Delete</button>\n" +
    "\n" +
    "								<button class=\"btn btn-info\" ng-click=\"addTAnswer(c)\"> Add answer </button>\n" +
    "								<div ng-repeat=\"a in c.Answers\">\n" +
    "								<span>Answer {{a.ID}}: </span>\n" +
    "									<input type=\"text\" id=\"CourseQtext\" ng-model=\"a.Text\" placeholder=\"Titill\"/>\n" +
    "									<input type=\"text\" id=\"CourseQtextEN\" ng-model=\"a.TextEN\" placeholder=\"Title\"/>\n" +
    "									<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveAnswer(c, a, 'c')\">Delete</button>\n" +
    "\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "		    <!-- TeacherQuestions -->\n" +
    "		    <div class=\"panel panel-default\">\n" +
    "				<div class=\"panel-heading\">\n" +
    "					<h3 class=\"panel-title\">Teacher Questions</h3>\n" +
    "				</div>\n" +
    "				<div class=\"panel-body\">\n" +
    "					<div class=\"form-group\">\n" +
    "						<button class=\"btn btn-info\" ng-click=\"addTQuestion('text')\"> Text </button>\n" +
    "						<div ng-repeat=\"t in evalForm.TeacherQuestions\" ng-show=\"t.Type === 'text'\">\n" +
    "						<span>Text question {{t.ID}}: </span>\n" +
    "							<input type=\"text\" id=\"TeacherQtext\" ng-model=\"t.Text\" placeholder=\"Titill\"/>\n" +
    "							<input type=\"text\" id=\"TeacherQtextEN\" ng-model=\"t.TextEN\" placeholder=\"Title\"/>\n" +
    "							<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveQuestion(t, 't')\">Delete</button>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"form-group\">\n" +
    "						<button class=\"btn btn-info\" ng-click=\"addTQuestion('single')\"> Single Choice </button>\n" +
    "						<div ng-repeat=\"t in evalForm.TeacherQuestions\">\n" +
    "							<div ng-show=\"t.Type === 'single'\">\n" +
    "								<span>Single choice question {{t.ID}}: </span>\n" +
    "								<input type=\"text\" id=\"TeacherQtext\" ng-model=\"t.Text\" placeholder=\"Titill\"/>\n" +
    "								<input type=\"text\" id=\"TeacherQtextEN\" ng-model=\"t.TextEN\" placeholder=\"Title\"/>\n" +
    "								<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveQuestion(t, 't')\">Delete</button>\n" +
    "\n" +
    "								<button class=\"btn btn-info\" ng-click=\"addTAnswer(t)\"> Add answer </button>\n" +
    "								<div ng-repeat=\"a in t.Answers\">\n" +
    "								<span>Answer {{a.ID}}: </span>\n" +
    "									<input type=\"text\" id=\"TeacherQtext\" ng-model=\"a.Text\" placeholder=\"Titill\"/>\n" +
    "									<input type=\"text\" id=\"TeacherQtextEN\" ng-model=\"a.TextEN\" placeholder=\"Title\"/>\n" +
    "									<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveAnswer(t, a, 't')\">Delete</button>\n" +
    "\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"form-group\">\n" +
    "						<button class=\"btn btn-info\" ng-click=\"addTQuestion('multiple')\"> Multiple Choice </button>\n" +
    "						<div ng-repeat=\"t in evalForm.TeacherQuestions\">\n" +
    "							<div ng-show=\"t.Type === 'multiple'\">\n" +
    "								<span>Text question {{t.ID}}: </span>\n" +
    "								<input type=\"text\" id=\"TeacherQtext\" ng-model=\"t.Text\" placeholder=\"Titill\" />\n" +
    "								<input type=\"text\" id=\"TeacherQtextEN\" ng-model=\"t.TextEN\" placeholder=\"Title\"/>\n" +
    "								<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveQuestion(t, 't')\">Delete</button>\n" +
    "\n" +
    "								<button class=\"btn btn-info\" ng-click=\"addTAnswer(t)\"> Add answer </button>\n" +
    "								<div ng-repeat=\"a in t.Answers\">\n" +
    "								<span>Answer {{a.ID}}: </span>\n" +
    "									<input type=\"text\" id=\"TeacherQtext\" ng-model=\"a.Text\" placeholder=\"Titill\"/>\n" +
    "									<input type=\"text\" id=\"TeacherQtextEN\" ng-model=\"a.TextEN\" placeholder=\"Title\"/>\n" +
    "									<button class=\"btn btn-danger btn-xs\" ng-click=\"RemoveAnswer(t, a, 't')\">Delete</button>\n" +
    "\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<button type=\"button\" class=\"btn btn-info\" ng-click=\"createEval()\">Submit</button>\n" +
    "		</div>\n" +
    "\n" +
    "		\n" +
    "	</div>\n" +
    "	\n" +
    "\n" +
    "</div>");
}]);

angular.module("teacherhome.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("teacherhome.html",
    "<div class=\"jumbotron\">\n" +
    "	<h2>Teacher's view</h2>\n" +
    "\n" +
    "	<p><a class=\"btn btn-lg btn-info\" ng-click=\"create()\">Create template</a></p>\n" +
    "\n" +
    "\n" +
    "	<p class=\"lead\">\n" +
    "		List of evaluation templates\n" +
    "	</p>\n" +
    "\n" +
    "	<div class=\"alert alert-success\" ng-cloak ng-show=\"successMessage != ''\">\n" +
    "    	{{successMessage}}\n" +
    " 	 </div>\n" +
    "\n" +
    "	<ul>\n" +
    "		<li ng-repeat=\"e in evalYOLO\" id=\"evals\">\n" +
    "			<button class=\"btn btn-info btn-xs\" ng-click=\"goToPublish(e)\" id=\"pubbutt\">Publish</button>\n" +
    "					{{e.Title}} \n" +
    "		</li>\n" +
    "\n" +
    "	</ul>\n" +
    "\n" +
    "</div>");
}]);
