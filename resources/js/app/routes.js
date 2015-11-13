
'use strict';
//App fetch
var app = require('angular').module('OmniApp');

app.config(function ($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'templates/test',
        controller: 'testController'
    })
    .when('/test2', {
        templateUrl: 'templates/test2',
        controller: 'test2Controller'
    })
    .when('/test3/:num', {
        templateUrl: 'templates/test3/:num',
        controller: 'test2Controller'
    })
    .when('/forecast', {
        templateUrl: 'templates/forecast',
        controller: 'forecastController'
    })
    .when('/forecast/:days', {
        templateUrl: 'templates/forecast',
        controller: 'forecastController'
    })
    .otherwise({redirectTo: '/'});
    
});