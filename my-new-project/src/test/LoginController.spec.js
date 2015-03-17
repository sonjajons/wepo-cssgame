describe('LoginController', function () {

	var ctrl;
	var $scope;
	var location;
	var token = "loremipsum";

	var mockLoginResc = {
		login: function(user,pass) {
			return {
				success:function(callback){
					if(user == "dabs") {
						callback({User:{Role:'student'}});
					}
					return this;
				},
				error:function(callback){

				}
			};

			// login???
		},
		setToken: function(foken) {
			token = foken;
		},
		retToken: function() {
			return token;
		}
	};

	// Load controller module 
	beforeEach(module('evalApp'));

	beforeEach(inject(function($controller, $rootScope, $location) {
		$scope = $rootScope.$new();
		ctrl = $controller("LoginController", { 
			$scope: $scope,
			LoginResources: mockLoginResc,
			$location: location
		});
	}));

	/*it('should login student successfully', function() {
		$scope.user = "dabs";
		$scope.pass = "12345";

		
		spyOn(mockLoginResc,'login').andCallThrough();
		//spyOn(location, 'path');
		$scope.login();
		expect(mockLoginResc.login).toHaveBeenCalledWith('dabs','12345');
		
		//expect(location.path).toHaveBeenCalledWith('/student');
	});*/
});


/*
	angular.module('evalApp')
	.controller('LoginController', function ($scope, LoginResources, $location) {
	
		$scope.errorMessage = "";

		$scope.login = function () {
			LoginResources.login($scope.user, $scope.pass)
			.success(function (data) {
				
				// Saving token
				LoginResources.setToken(data.Token);

				if(data.User.Role === "admin") {
					//Redirect to evaluation create template
					$location.path('/teacher');
				}
				else {
					// Redirect to evaluation
					$location.path('/student');
				}
			})
			.error(function () {
				// Login failed ==> error msg 
				$scope.errorMessage = 'Username and/or password invalid. Please try again.';
			});
		};
	});
*/