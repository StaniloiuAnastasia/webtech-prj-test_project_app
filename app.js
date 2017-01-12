var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        
        //typical routes... when someone navigates to a given directory, load the partial, and use the controller
        $routeProvider.when('/index', {templateUrl: '/app/index.html', controller: 'indexController'});
        $routeProvider.when('/Books', {templateUrl: '/views/Books.html', controller: 'BooksController'});
        $routeProvider.when('/Events', {templateUrl: '/views/Events.html', controller: 'EventsController'});
        
        
        //if no valid routes are found, redirect to /index
        $routeProvider.otherwise({redirectTo: '/index'});
        //new comment
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    }])
