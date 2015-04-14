'use strict';
// settings test
describe('Merge Directive', function() {

    var scope, httpBackend, element, isolated;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.module('templates'));

    beforeEach(angular.mock.inject(function($injector, $rootScope, $compile) {
        httpBackend = $injector.get('$httpBackend');
        httpBackend.when('GET', '/config').respond({
            
        });

        scope = $rootScope.$new();

        element = $compile("<merge></merge>")(scope);
        scope.$digest();
        isolated = element.isolateScope();
    }));

    // should set scope.branch to true if repo id is equal to head
    // should watch status
    // should increment status count if status state is equal to state
    // should count error statuses as failed when combined status is fails
    // should set default status to either status or ‘pending’
    // should get star text successfully
    // should delete branch successfully
    // should merge pr successfully
    // should confirm thing

    it('should do thing', function() {
        

        httpBackend.expect('POST', '/api/settings/get').respond({
            settings: 'settings'
        });
        httpBackend.expect('POST', '/api/repo/get').respond({
            repo: 'repo'
        });

        httpBackend.flush();
        (directive.scope.settings.value.settings).should.be.exactly('settings');
        (directive.scope.reposettings.value.repo).should.be.exactly('repo');
    });

});