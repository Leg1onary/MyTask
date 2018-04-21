myapp.controller('myappCtrl', function ($scope, $http) {
    $http.get('person.json').success(function(data) {
        $scope.person = data;
        $scope.metaData = [];
        //формирование заголовка (извлечение метаданных из json)
        for (var i = 0; i < $scope.person.data.metaData.length; i++) {
            $scope.metaData.push($scope.person.data.metaData[i].name);
        };
        $scope.clients = [];
        $scope.personInfo = {};
        //формирование ассоциативного массива клиентов в формате [{key-value,..},{key-value,..},..]
        for (var i = 0; i < $scope.person.data.rows.length; i++ ) {
            for (var j = 0; j < $scope.metaData.length; j++) {
                $scope.personInfo[$scope.metaData[j]] = $scope.person.data.rows[i][j];
            }
            $scope.clients.push($scope.personInfo);
            $scope.personInfo = {};
        }
        //удаление клиента из таблицы
        $scope.archive = function (indx) {
            $scope.clients.splice(indx,1);
        };
        $scope.newClientObj = {}
        //добавление клиента в таблицу
        $scope.addClient = function() {
            $scope.clients.push($scope.newClientObj);
            $scope.newClientObj = {}
        }

    });
});