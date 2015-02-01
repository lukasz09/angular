// serwis, który korzysta z fabryki. Fabryka jest wstrzyknięta
// serwis posiada metodę 'getMovies', która zwraca dane z fabryki
moviesApp.service('movieService', function(movieFactory) {
	this.getMovies = function() {
		return movieFactory;
	};
});


