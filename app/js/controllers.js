// plik z dwoma kontrolerami

// kontroler listy filmów
moviesApp.controller('MoviesListController', function($scope, movieService) {

	// tworzy pusty obiekt filmu
    $scope.newMovie = {};
    // pobiera podstawową listę filmów z serwisu
    $scope.movies = movieService.getMovies();
    
    // metoda dodająca film do tablicy
    $scope.addMovie = function () {
    	// dadanie filmu
        $scope.movies.push({
        	title: $scope.newMovie.title,
        	desc: $scope.newMovie.desc,
        	director: $scope.newMovie.director,
        	createDate : $scope.newMovie.createDate
        });
        // wyczyszczenie danych z formularza, żeby można było dodać kolejny film
        $scope.newMovie = {};
    }
    
    $scope.clear = function () {
        // wyczyszczenie danych z formularza, żeby można było dodać kolejny film
        $scope.newMovie = {};
    }
});

// kontroler do edycji filmów
moviesApp.controller('MoviesEditController', function($scope, $routeParams, $location, movieService) {
	
	// pobranie filmów z serwisu i zapisanie ich do zmiennej
	var movies = movieService.getMovies();
	// szukanie aktualnie edytowanego filmu. Używamy pętli
	for (var i in movies) {  
		// $routeParams.movieTitle <- tutaj jest nasz parametr, który przekazujemy
		// sprawdzamy czy parametr jest zgodny z filmem
		if(movies[i].title == $routeParams.movieTitle){
			// jeśli parametr i nazwa filmu się zgadzają, to:
			// zapisujemy indeks filmu
			$scope.movieIndex = i;
			// kopiujemy dane filmu do zmienne 'movie'
			$scope.movie = { 
					title: movies[i].title, 
					desc: movies[i].desc, 
					director: movies[i].director,
					createDate : movies[i].createDate
				};
			// wychodzimy z pętli, ponieważ film został znaleziony
			break;
		}
	}
	
	// metoda zapisz dane filmu
	$scope.saveMovie = function () {
		// movies[$scope.movieIndex] <- szukamy filmu w tablicy po indeksie, który wcześniej zapisaliśmy
		// i robimy przepisanie wartości z formularza
		movies[$scope.movieIndex] = { 
			title: $scope.movie.title, 
			desc: $scope.movie.desc, 
			director: $scope.movie.director,
			createDate: $scope.movie.createDate
		};
		// cofamy się do listy filmów
		$location.path( "/movies" );
    }
	
	// metoda anuluj, czyli nie zapisuj danych i cofnij się do '/movies'
	$scope.cancel = function () {
		$location.path( "/movies" );
    }

});