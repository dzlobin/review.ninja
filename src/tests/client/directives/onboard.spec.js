'use strict';
// settings test
describe('Onboard Directive', function() {

    var rootScope, elScope, repo, httpBackend, createDirective, element;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.module('templates'));

    beforeEach(angular.mock.inject(function($injector, $rootScope, $compile) {

        httpBackend = $injector.get('$httpBackend');
        httpBackend.when('GET', '/config').respond({
            
        });

        // create user promise

        rootScope = $rootScope.$new();
        element = $compile('<onboard></onboard>')(rootScope);
        rootScope.$digest();
        elScope = element.isolateScope();
        elScope.$digest();
        rootScope.actions = [
            {key: 'user:addRepo', text: 'Add repo'},
            {key: 'pullRequests:get', text: 'View pull request', elementclass: 'ob-pull', transition: 'wobble-vertical'},
            {key: 'issues:add', text: 'Open issue', elementclass: 'ob-create', transition: 'wobble-vertical'},
            {key: 'issues:closed', text: 'Close issue', elementclass: 'ob-close', transition: 'wobble-vertical'},
            {key: 'star:add', text: 'Add ninja star', elementclass: 'ob-star', transition: 'rotate'},
            {key: 'pullRequests:merge', text: 'Merge pull request', elementclass: 'ob-merge', transition: 'wobble-vertical'}
        ];
    }));

    // afterEach(function() {
    //     httpBackend.verifyNoOutstandingExpectation();
    //     httpBackend.verifyNoOutstandingRequest();
    // });

    // should get a user’s completed actions for onboarding


    // should add transition class to element
    it('should add transition class to an element', function($compile) {
        var fakeNoClass = $compile('<div class="ob"></div>')(elScope);
        console.log(fakeNoClass);
        elScope.addClass('ob', 'test');
        console.log(fakeNoClass);
        (fakeNoClass).should.be.exactly($compile('<div class="ob test"></div>')(elScope));
    });

    // should remove transition class from element
    it('should remove a transition class from an element', function($compile) {
        var fakeClass = $compile('<div class="ob test"></div>')(elScope);
        console.log(fakeClass);
        elScope.removeClass('ob', 'test');
        console.log(fakeClass);
        (fakeClass).should.be.exactly($compile('<div class="ob"></div>')(elScope));
    });

    // socket -> get user’s actions upon getting action value from server

});