'use strict';

describe('Service: favoriteService', function () {

  // load the service's module
  beforeEach(module('services'));

  // instantiate service
  var favoriteService;
  beforeEach(inject(function (_favoriteService_) {
    favoriteService = _favoriteService_;
  }));

  it('should do something', function () {
    expect(!!favoriteService).toBe(true);
  });

});
