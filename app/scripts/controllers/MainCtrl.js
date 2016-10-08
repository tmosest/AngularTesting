angular
    .module('pizzaStore')
    .controller('MainController', ['$scope', function($scope) {
        $scope.welcomeMessage = 'Welcome to the pizza store!';
    }]);