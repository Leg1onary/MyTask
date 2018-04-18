'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp',[]);


myApp.controller('myappCtrl', function ($scope, $http) {
    $http.get('person.json').success(function(data) {
        $scope.person = data;
        $scope.metaData = [];
        for (var i = 0; i < $scope.person.data.metaData.length; i++) {
            $scope.metaData.push($scope.person.data.metaData[i].name);
        };
        $scope.clients = [];
        $scope.personInfo = {};
        for (var i = 0; i < $scope.person.data.rows.length; i++ ) {
           for (var j = 0; j < $scope.metaData.length; j++) {
            $scope.personInfo[$scope.metaData[j]] = $scope.person.data.rows[i][j];
           }
           $scope.clients.push($scope.personInfo);
           $scope.personInfo = {};
        }
    });
});
