angular.module('templates-common', ['evaluation-question.tpl.html']);

angular.module("evaluation-question.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("evaluation-question.tpl.html",
    "<div id=\"evalQuestion\">{{e.TextEN}}</div>\n" +
    "<div ng-if=\"e.Type == 'text'\">\n" +
    "	<textarea name=\"{{a.ID}}\" class=\"evalAnswers\"></textarea>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"e.Type === 'single'\">\n" +
    "	<div ng-repeat=\"a in e.Answers\" >\n" +
    "		<input type=\"radio\" name=\"{{e.ID}}\" value=\"{{a.ID}}\" class=\"evalAnswers\"/> {{a.TextEN}}\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"e.Type === 'multiple'\">\n" +
    "	<div ng-repeat=\"a in e.Answers\" >\n" +
    "		<input type=\"checkbox\" name=\"{{e.ID}}\" value=\"{{a.ID}}\" class=\"evalAnswers\"/> {{a.TextEN}}\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
