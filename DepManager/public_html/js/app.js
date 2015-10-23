var mainApp = angular.module('mainApp', ['oc.lazyLoad']);



mainApp.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
  $ocLazyLoadProvider.config({
    debug: true,
    modules: [{
    name: 'testModule',
    files: ['js/testModule.js']
  },
  {
    name: 'serverComm',
    files: ['js/services/serverService.js']
  }]
  });
}]);


mainApp.controller('AppCtrl', ['$scope','$ocLazyLoad', function ($scope,$ocLazyLoad) {
        var app = this;
        
        app.loadModTest=function(){
            console.log("Load Started...");
            $ocLazyLoad.load('testModule').then(
                    function(){
                        console.log($ocLazyLoad.getModules());
                    });
                    $ocLazyLoad.load('serverComm').then(
                    function(){
                        console.log($ocLazyLoad.getModules());
                    });
        };
    }]);
