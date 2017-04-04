var app = angular.module('ApplianceMarketApp', []);

app.controller('MainController', function($scope, $http) {
    $http.get("https://info3180-lab7-d-barnett.c9users.io/api/thumbnails")
    .then(function(response) {
        $scope.products = response.data;
    });
});

 