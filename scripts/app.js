var app = angular.module("personalAPI", ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: "views/homeTmpl.html",
        controller: "homeCtrl"
    })

    .when('/me', {
        templateUrl: "views/meTmpl.html",
        controller: "meCtrl"
    })

    .when('/skills', {
        templateUrl: "views/skillsTmpl.html",
        controller: "skillsCtrl"
    })

    .otherwise({
        redirectTo: '/'
    });

});
