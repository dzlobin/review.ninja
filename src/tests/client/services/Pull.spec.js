'use strict';
// pull test
describe('Pull Factory', function() {

    var scope, repo, httpBackend, createFactory;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.module('templates'));

    beforeEach(angular.mock.inject(function($injector, $rootScope) {

        httpBackend = $injector.get('$httpBackend');

        httpBackend.when('GET', '/config').respond({

        });
        scope = $rootScope.$new();

        repo = {
            value: {
                id: 1234
            }
        };
        createFactory = function() {

            var factory = $injector.get('Pull');
            return factory;
        };
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    // should match sha
    // should match ref
    // should match path
    // should match start
    // should match end
    // should match body
    // should render body if body exists

    it('should do thing', function() {
        var factory = createFactory();

        httpBackend.expect('POST', '/api/settings/get').respond({
            settings: 'settings'
        });
        httpBackend.expect('POST', '/api/repo/get').respond({
            repo: 'repo'
        });

        httpBackend.flush();
        (factory.scope.settings.value.settings).should.be.exactly('settings');
        (factory.scope.reposettings.value.repo).should.be.exactly('repo');
    });

});