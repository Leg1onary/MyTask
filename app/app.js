'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp',[]);


myApp.controller('PersonCtrl', function ($scope, $http) {
    $http.get('person.json').success(function(data) {
        $scope.person = data;
    });
});
