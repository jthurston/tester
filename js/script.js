var mainAngular = angular.module('myApp', []);
mainAngular.controller('headerCategoryController', function($scope, $http) {
  //var hCat=  "./customAngular/headerCatalogue.json";
  var hCat = 'data.json'
  $http.get(hCat).then(function(response) {
    $scope.categories = response;
  });
});