'use strict';

describe('Directive: editInPlaceDirective', function () {

  // load the directive's module
  beforeEach(module('widget'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<edit-in-place-directive></edit-in-place-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the editInPlaceDirective directive');
  }));
});
