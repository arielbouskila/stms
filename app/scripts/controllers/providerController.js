(function () {
  'use strict';

  var YOUR_PREFFERED_BAND = 'oasis';

  angular.module('controllers')
    .controller('ProviderCtrl', providerCtrl);

  providerCtrl.$inject = ['mainService'];

  function providerCtrl(mainService) {

    var vm = this;
    vm.sortType = 'name';
    vm.sortReverse = false;
    vm.hasError = false;
    vm.albumIds = {};

    function init() {
      mainService.getSpotifyAlbum(YOUR_PREFFERED_BAND).then(function (result) {
        vm.albums = result.data.albums.items;

      }, function () {
        vm.hasError = true;
      });
    }


    vm.sort = sort;

    vm.isInFavorites = isInFavorites;

    vm.select = select;

    function sort(orderBy) {
      vm.sortType = orderBy;
      vm.sortReverse = !vm.sortReverse;
    }

    function isInFavorites(id) {
      var isInFavorite = mainService.isInFavorites(id);
      vm.albumIds[id] = isInFavorite > -1;
      return isInFavorite;
    }

    function select(item) {
      if (vm.albumIds[item.id]) {
        vm.albumIds[item.id] = false;

        mainService.removeFavorite(item);
      } else {

        mainService.addFavorite(item);
        vm.albumIds[item.id] = true;
      }
    }


    init();

  }
})();