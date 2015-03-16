describe('LoginResources', function () {
	
	// Load controller module 
	beforeEach(module('evalApp'));

	var LoginResources;

	it('true should be true', function() {
		expect(true).toBe(true);
	});

	beforeEach(inject(function (_LoginResources_) {
		LoginResources = _LoginResources_;
	}));

	it('should login student successfully', inject(function(LoginResources, $httpBackend) {
		$httpBackend.expect('POST', 'http://dispatch.ru.is/h26/api/v1/login')
		.respond(200, 'true');

		LoginResources.login('sonja13', '12345').then(function(data){
		expect(data).toBeTruthy();
		
		});
		//$httpBackend.flush();
	}));


	it('should login admin successfully', inject(function(LoginResources, $httpBackend) {
		$httpBackend.expect('POST', 'http://dispatch.ru.is/h26/api/v1/login')
		.respond(200, 'true');

		LoginResources.login('admin', '12345').then(function(data){
		expect(data).toBeTruthy();
		});
		//$httpBackend.flush();
	}));

	it('should NOT login mjamja', inject(function(LoginResources, $httpBackend) {
		$httpBackend.expect('POST', 'http://dispatch.ru.is/h26/api/v1/login')
		.respond(401, 'false');

		LoginResources.login('mjamja', 'mjamja').then(function(data){
		expect(data.status).toBe(401);
		});
		//$httpBackend.flush();
	}));
});