// deklaracja modułu angulara i chęci korzystania z ngRoute i ngResource
var moviesApp = angular.module('moviesApp', ['ngRoute', 'ngResource']);

// konfiguracja, umieszczamy tutaj nawigacje
moviesApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/movies', { // jeśli wchodzimy na /movies, to ładujemy poniższy KONTROLER i FRAGMENTR STRONY
                templateUrl: 'partials/list.html',
                controller: 'MoviesListController'
            }).
            when('/movies/:movieTitle', { // tutaj tak jak wyżej, ale jeszcze przekazujemy parametr :movieTitle
                templateUrl: 'partials/details.html',
                controller: 'MoviesEditController'
            }).
            otherwise({ // jeśli przekażemy do nawigacji coś czego Angular nie zrozumie, to robimy przekierowanie dp /movies
                redirectTo: '/movies'
            });
 }]);
 
 