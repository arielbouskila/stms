(function(){
'use strict';

/**
 * @ngdoc function
 * @name stmsApp.controller:FavoritesCtrl
 * @description
 * # FavoritesCtrl
 * Controller of the stmsApp
 */
angular.module('controllers',[])
  .controller('FavoritesCtrl',favoriteCtrl);
	favoriteCtrl.$inject = ['mainService'];
   function favoriteCtrl(mainService) {
    var vm = this;
    vm.sortType     = 'name';
		vm.sortReverse  = false;

    vm.sort = sort;
 function sort(orderBy){
			vm.sortType = orderBy;
			vm.sortReverse = !vm.sortReverse;
		}

    function init(){
      mainService.fetchFavorites().then(function(data){
        vm.favorites = data;
        console.log(vm.favorites);
      });

    }
    init();

  }

})();

