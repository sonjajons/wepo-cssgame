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
    "        <span><label for=\"user\" class=\"control-label\">Title:</label></span>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"user\" name=\"user\" ng-model=\"user\" required=\"required\"/>\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("teacherhome.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("teacherhome.html",
    "<div class=\"jumbotron\">\n" +
    "	<h2>Teacher's view</h2>\n" +
    "  \n" +
    "	<p class=\"lead\">\n" +
    "		List of evaluations\n" +
    "	</p>\n" +
    "\n" +
    "	<p><a class=\"btn btn-lg btn-info\" ng-click=\"create()\">Create evaluation</a></p>\n" +
    "\n" +
    "	<ul>\n" +
    "		<li> WebProgramming Evaluation [example] </li>\n" +
    "	</ul>\n" +
    "\n" +
    "</div>");
}]);
