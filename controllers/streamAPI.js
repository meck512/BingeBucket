var getNetflix = function () {
	var axios = require("axios").default;

	var options = {
	  method: 'GET',
	  url: 'https://streaming-availability.p.rapidapi.com/search/ultra',
	  params: {
		country: 'us',
		services: 'netflix,hulu',
		type: 'movie',
		order_by: 'imdb_vote_count',
		year_min: '2000',
		year_max: '2020',
		page: '10',
		// genres: '18,80',
		// genres_relation: 'or',
		desc: 'true',
		language: 'en'
		// min_imdb_rating: '70',
		// max_imdb_rating: '90',
		// min_imdb_vote_count: '10000',
		// max_imdb_vote_count: '1000000'
	  },
	  headers: {
		'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
		'x-rapidapi-key': 'f2ee12cbffmsh9a043e6ff8eb403p15aba3jsn46870cf178d2'
	  }
	};
	
	axios.request(options).then(function (response) {
		console.log(response.data);
	}).catch(function (error) {
		console.error(error);
	});
};
getNetflix();