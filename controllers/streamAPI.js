require('dotenv').config();
var axios = require("axios").default;

//Get an array of streaming series/movies
//servicesIn = REQUIRED one or more of the following:
//'netflix,prime,disney,hbo,hulu,peacock,paramount,starz,showtime,apple,mubi'
//typeIn = REQUIRED	'movie' OR 'series'
//e.g. getStreamList('netflix,prime','movie')
//e.g. getStreamList('netflix','series')
const getStreamList = async function (servicesIn, typeIn) {
	var options = {
		method: 'GET',
		url: 'https://streaming-availability.p.rapidapi.com/search/ultra',
		params: {
			country: 'us',
			// services: 'netflix,prime,disney,hbo,hulu,peacock,paramount,starz,showtime,apple,mubi',
			services: servicesIn,
			type: typeIn,
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
			// 'x-rapidapi-key': process.env.STREAM_API_KEY
			'x-rapidapi-key': "f2ee12cbffmsh9a043e6ff8eb403p15aba3jsn46870cf178d2"
		}
	};

	const resultData = await axios.request(options);
	return resultData.data.results;
	// .then(function (response) {
	// 	console.log('total pages returned: ', response.data.total_pages);
	// 	// console.log(response.data.results);
	// 	return response.data.results;
	// }).catch(function (error) {
	// console.error(error);
	// });
};

//Get the individual show from the API 
// Usage id is TMDb ID or an IMDb in the format of tv/71712 or movie/464052
//e.g. getItemData('tv/66732');
async function getItemData(id) {
	var options = {
		method: 'GET',
		url: 'https://streaming-availability.p.rapidapi.com/get/basic',
		params: { country: 'us', tmdb_id: id },
		headers: {
			'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
			// 'x-rapidapi-key': process.env.STREAM_API_KEY
			'x-rapidapi-key': "f2ee12cbffmsh9a043e6ff8eb403p15aba3jsn46870cf178d2"
		}
	};

	axios.request(options).then(function (response) {
		// console.log(response.data);
		// console.log(response.data.streamingInfo);
		// singleItem = response.data;
		return response.data.results;
	}).catch(function (error) {
		console.error(error);
	});
};


exports.getStreamList = getStreamList;