// fabryka, która tworzy nam tablicę z filmami. Dane pobierane są z pliku 'data/movies.json'
moviesApp.factory('movieFactory', function($resource) {
	return $resource('data/movies.json').query();
});

 