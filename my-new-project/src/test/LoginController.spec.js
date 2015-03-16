describe('LoginResources', function () {
	
	// Load controller module 
	beforeEach(module('evalApp'));


	var MockLoginResources;

	beforeEach( inject( function(LoginResources){
		MockLoginResources = LoginResources;
	}));

	/*it('should login student', inject(function(MockLoginResources, $httpBackend) {
		$httpBackend.expect('POST', 'http://dispatch.ru.is/h26/api/v1/login')
		.respond(200, 'true');

		MockLoginResources.login('sonja13', '12345').then(function(data){
			expect(data).toBeFalsy();
		});
		
		$httpBackend.flush();
	}));*/

	/*it('should have loginresources', function (){
		expect(evalApp.LoginResources).toBeDefined();
	});*/

});