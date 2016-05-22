// require('..node_modules/angular');
var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope','$http',function ($scope, $http) {
  console.log('HI contr');

  var refresh = function(){
    $http.get('/contactlist').success(function(response) {
      console.log('I got data');
      console.log(response);

      $scope.contactlist = response;
      $scope.content = "";
    });
  };

  refresh();

  $scope.addContact = function() {
    console.log($scope.contact); // виведе в консоль contact який вказаний в інпутах
    $http.post('/contactlist', $scope.contact).success(function(response){
      console.log(response);
      refresh();
    });
  };

  $scope.remove = function(id) {
    console.log(id);
    $http.delete('/contactlist/' + id).success(function(response){
      console.log(response);
      refresh();
    });
  };

  $scope.edit = function(id) {
    console.log(id);
    $http.get('/contactlist/' + id).success(function(response){
      console.log(response);
      $scope.contact = response;
      //refresh();
    });
  };

  $scope.update = function() {
    //console.log(id);
    $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
      console.log(response);
      $scope.contact = "";
      refresh();
    });
  };
}]);
