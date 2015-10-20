


//Init the app Framework and create the application module

var FW = {};
var WIDGETS = {};
var TYPES = {};
var VIEWS = {};





var mainApp = angular.module('mainApp', ['serverComm', 'ngAnimate', 'ngRoute','aSearch','w_productCard','Widget_Module']);

mainApp.config(function ($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
});

mainApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        //$locationProvider.hashPrefix('!');
        $routeProvider
                .when('/', {templateUrl: VIEWS.main.url})
                .otherwise({redirectTo: '/home'});

    }]);

mainApp.controller('AppCtrl', ['$scope','Widget', function ($scope, Widget) {

        var app = this;
        app.searchResult = {};
        Widget.getWidgets();
    }]);
