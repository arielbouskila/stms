(function () {
  'use strict';
  /**
   * @ngdoc service
   * @name stmsApp.favoriteService
   * @description
   * # favoriteService
   * Service in the stmsApp.
   */

  angular.module('services', [])
    .factory('mainService', function ($http, $q, $localStorage) {

      var endPoint = "https://api.spotify.com/v1/search";
      this.getSpotifyAlbum = function (artistName) {
        return $http.get(endPoint, {
          params: {
            q: artistName,
            type: 'album',
            limit: 50
          }
        });
      };

      this.addFavorite = function (item) {
        var deferred = $q.defer();
        var favorites = getFavorites();

        var index = favorites.indexOf(item);
        if (index === -1) {

          favorites.push(item);
          $localStorage.Myfavorites = favorites;
        }

        return deferred.promise;
      };

      this.removeFavorite = function (item) {
        var deferred = $q.defer();
        var favorites = getFavorites();
        var index = this.isInFavorites(item.id);
        if (index > -1) {
          favorites.splice(index, 1);
        }
        $localStorage.Myfavorites = favorites;

        return deferred.promise;
      };

      this.isInFavorites = function (id) {
        var favorites = getFavorites();
        for (var i = 0; i < favorites.length; i++) {
          if (favorites[i].id === id) {
            return i;
          }
        }
        return -1;
      };

      this.fetchFavorites = function () {
        var deferred = $q.defer();
        deferred.resolve($localStorage.Myfavorites);
        return deferred.promise;

      };

      function getFavorites() {
        return $localStorage.Myfavorites || [];
      }
      return this;
    });

})();