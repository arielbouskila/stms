(function(){
  'use strict';
/**
 * @ngdoc overview
 * @name stmsApp
 * @description
 * # stmsApp
 *
 * Main module of the application.
 */
angular
  .module('stmsApp', [
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngStorage',
    'services',
    'controllers',
    'widgets'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/favorites');
    $stateProvider
      .state('favorites', {
        url: '/favorites',
        templateUrl: 'views/favorites.html',
        controller: 'FavoritesCtrl',
        controllerAs: 'favoriteVM'
      })
      .state('providers', {
        url:'/providers',
        templateUrl: 'views/providers.html',
        controller: 'ProviderCtrl',
        controllerAs: 'providerVM'
      });


  });
})();

