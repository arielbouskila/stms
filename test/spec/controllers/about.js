'use strict';

describe('Controller: providerController', function () {

  // load the controller's module
  beforeEach(module('controllers'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    scope.awesomeThings =[1,2,3];

    AboutCtrl = $controller('ProviderCtrl', {
      $scope: scope

    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutCtrl.awesomeThings.length).toBe(3);
  });
});
