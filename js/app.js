var myApp = angular.module('myApp',[]);

myApp.controller('headerCategoryController', function($scope, $http) {
  //var hCat=  "./customAngular/headerCatalogue.json";
  var hCat = 'data.json'
  $http.get(hCat).success(function(response) {
    $scope.categories = response;
  });
})

//myApp.directive('myDirective', function() {});
myApp.factory('Srv', function() {
    var data = {}, fromServer = {"1":"I am one","2":"I am two"};
    return {
        pick: function(id) {
            data.description = fromServer[id];
        },
        data:data
    };
})


.controller('Ctrl1',function($scope,Srv) {
            $scope.firstName= "John";
				    $scope.lastName= "Doe";
            
            var thelist = [
            
            ]
            
    $scope.select = function(id) {
        Srv.pick(id);
    };
})
.controller('Ctrl2',function($scope,Srv) {
    $scope.details = Srv.data;    
})
.controller('Ctrl3',function($scope){
    $scope.document = "Some more info here!";
});