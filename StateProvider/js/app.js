var mainapp = angular.module("mainApp", ['ngRoute', 'ui.router']);
mainapp.config(['$routeProvider', '$stateProvider', '$locationProvider', '$location', function ($routeProvider, $stateProvider, $locationProvider, $location)
{
    //$locationProvider.hashPrefix('!');

    //Route Provider
    $routeProvider
    .when('/', { templateUrl: 'Home.html' })
    .when('/home', { templateUrl: 'Home.html' })
    .when('/about', { templateUrl: 'About.html' })
    .when('/address', { templateUrl: 'Address.html' })
    .otherwise({ redirectTo: '/' });
//To implement StateProvider 
    $stateProvider
    .state("tab1_home", {
        url: '',
        template: '<p>Tab 1 Template </p>'        
    })
   // .state("tab1_home", { url: '', templateUrl: 'About.html'})
    .state("tab2_home", {
        url: '',
        template: '<p>Tab 2 Template </p>'
    });

    /*Remove # symbol from Relative URL*/
  //  $locationProvider.html5Mode(true);
}
]); 