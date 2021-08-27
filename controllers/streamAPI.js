require('dotenv').config();
var axios = require("axios").default;
// var singleItem;

function getStreamList() {
	var options = {
		method: 'GET',
		url: 'https://streaming-availability.p.rapidapi.com/search/ultra',
		params: {
			country: 'us',
			// services: 'netflix,prime,disney,hbo,hulu,peacock,paramount,starz,showtime,apple,mubi',
			services: 'netflix',
			type: 'movie',
			order_by: 'imdb_vote_count',
			year_min: '2000',
			year_max: '2020',
			// page: '326',
			// genres_relation: 'or',
			desc: 'true',
			language: 'en',
			min_imdb_rating: '90',
			max_imdb_rating: '100',
			min_imdb_vote_count: '10000',
			max_imdb_vote_count: '1000000'
		},
		headers: {
			'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
			'x-rapidapi-key': process.env.STREAM_API_KEY
		}
	};

	axios.request(options).then(function (response) {
		// console.log('total pages returned: ', response.data.total_pages);
		// console.log(response.data.results);
		return response.data.results;
	}).catch(function (error) {
		console.error(error);
	});
};

function getItemData(id) {
	var options = {
		method: 'GET',
		url: 'https://streaming-availability.p.rapidapi.com/get/basic',
		params: { country: 'us', tmdb_id: id },
		headers: {
			'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
			'x-rapidapi-key': process.env.STREAM_API_KEY
		}
	};

	axios.request(options).then(function (response) {
		console.log(response.data);
		console.log(response.data.streamingInfo);
		// singleItem = response.data;
	}).catch(function (error) {
		console.error(error);
	});
};

// getItemData('movie/120');

getItemData('tv/66732');
// getStreamList();