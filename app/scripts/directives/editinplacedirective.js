(function () {
  'use strict';

  angular.module('widgets', [])
    .directive('editInPlace', function () {
      return {
        restrict: 'E',
        scope: {
          value: '=?'
        },
        template: '<span ng-click="edit()" ng-bind="value"></span><input ng-model="value" ng-blur="stop()" placeholder="edit here" class="form-control"></input>',
        controller: function ($scope) {
          if (!angular.isDefined($scope.value) || $scope.value === '') {
            $scope.value = 'Empty';
          }
        },

        link: function postLink(scope, element) {
          var inputElement = angular.element(element.children()[1]);
          element.addClass('edit-in-place');
          handleEmpty();

          inputElement.bind('keydown keypress', function (event) {
            if (event.which === 13) {
              scope.stop();
            }
          });
          scope.edit = function () {


            element.addClass('active');
            inputElement.focus();
          };
          scope.stop = function () {
            handleEmpty();
            element.removeClass('active');
          };

          function handleEmpty() {
            if (scope.value === '') {
              scope.value = 'Empty';
            }
            if (scope.value === 'Empty') {
              element.addClass('empty');
            } else {
              element.removeClass('empty');
            }
          }
        }
      };
    });
})();