var app = angular.module('starWarsApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'templates/loginTemplate.html', controller: 'loginController' })
        .when('/search', { templateUrl: 'templates/searchPlanet.html', controller: 'searchPlanetController' })
        .otherwise({ redirectTo: '/' });
});
