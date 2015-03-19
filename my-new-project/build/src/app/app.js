(function () {
   "use strict";


    angular.module('evalApp', ['ngRoute', 'templates-app', 'templates-common'])
        .config(function ($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'login.html',
            controller: 'LoginController'
          })
          .when('/teacher', {
            templateUrl: 'teacherhome.html',
            controller: 'TeacherController'
          })
          .when('/teacher/createEval', {
            templateUrl: 'teachercreate.html',
            controller: 'TeacherCreateEval'
          })
          .when('/teacher/createEval/:evalID', {
            templateUrl: 'teachercreate.html',
            controller: 'TeacherCreateEval'
          })
          .when('/student', {
            templateUrl: 'studenthome.html',
            controller: 'StudentController'
          })
          .when('/student/evaluation/:courseID/:semester/:evalID', {
            templateUrl: 'studenteval.html',
            controller: 'StudentEval'
          })
          .otherwise({
            redirectTo: '/'
          });
    });


}());

/**
 * @ngdoc overview
 * @name evalWepoApp
 * @description
 * # evalWepoApp
 *
 * Main module of the application.
 */





/*(function(app) {
    app.config(['$stateProvider', '$routeProvider', function ($stateProvider, $routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'home'
        })
        .otherwise('/home');
    }]);
    app.run(function () {});
    app.controller('AppController', ['$scope', function ($scope) {
    }]);
}(angular.module("evalApp", [
    'evalApp.home',
    'evalApp.about',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
])));*/


/*(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {

    });

}(angular.module("evalApp", [
    'evalApp.home',
    'evalApp.about',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
]))); */