var axios = require("axios").default;
require('dotenv').config();

const getStreamList = function (servicesIn, typeIn) {
    return [{ "imdbID": "tt2267998", "tmdbID": "210577", "imdbRating": 81, "imdbVoteCount": 902705, "tmdbRating": 79, "backdropPath": "/x9ezMgOtDPqHatHDvxEG0ILb6Ie.jpg", "backdropURLs": { "300": "https://image.tmdb.org/t/p/w300/x9ezMgOtDPqHatHDvxEG0ILb6Ie.jpg", "780": "https://image.tmdb.org/t/p/w780/x9ezMgOtDPqHatHDvxEG0ILb6Ie.jpg", "1280": "https://image.tmdb.org/t/p/w1280/x9ezMgOtDPqHatHDvxEG0ILb6Ie.jpg", "original": "https://image.tmdb.org/t/p/original/x9ezMgOtDPqHatHDvxEG0ILb6Ie.jpg" }, "originalTitle": "Gone Girl", "genres": [18, 9648, 53], "countries": ["US"], "year": 2014, "runtime": 149, "cast": ["Rosamund Pike", "Ben Affleck", "Kim Dickens", "Tyler Perry", "Neil Patrick Harris", "Carrie Coon", "Patrick Fugit"], "significants": ["David Fincher"], "title": "Gone Girl", "overview": "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.", "tagline": "You don't know what you've got 'til it's...", "video": "2-_-1nJf8Vg", "posterPath": "/qymaJhucquUwjpb8oiqynMeXnID.jpg", "posterURLs": { "92": "https://image.tmdb.org/t/p/w92/qymaJhucquUwjpb8oiqynMeXnID.jpg", "154": "https://image.tmdb.org/t/p/w154/qymaJhucquUwjpb8oiqynMeXnID.jpg", "185": "https://image.tmdb.org/t/p/w185/qymaJhucquUwjpb8oiqynMeXnID.jpg", "342": "https://image.tmdb.org/t/p/w342/qymaJhucquUwjpb8oiqynMeXnID.jpg", "500": "https://image.tmdb.org/t/p/w500/qymaJhucquUwjpb8oiqynMeXnID.jpg", "780": "https://image.tmdb.org/t/p/w780/qymaJhucquUwjpb8oiqynMeXnID.jpg", "original": "https://image.tmdb.org/t/p/original/qymaJhucquUwjpb8oiqynMeXnID.jpg" }, "age": 16, "streamingInfo": { "hulu": { "us": { "link": "https://www.hulu.com/movie/10ab8561-72f0-4009-ac6e-708e2a611a91", "added": 1623817848, "leaving": 1646121600 } } }, "originalLanguage": "en" }];
};

const getStreamListBAD = async function (servicesIn, typeIn) {
    var options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/search/ultra',
        params: {
            country: 'us',
            services: 'netflix,hulu',
            type: 'movie',
            order_by: 'imdb_vote_count',
            year_min: '2014',
            year_max: '2020',
            page: '1',
            genres: '18,80',
            genres_relation: 'or',
            desc: 'true',
            language: 'en',
            min_imdb_rating: '80',
            max_imdb_rating: '90',
            min_imdb_vote_count: '100000',
            max_imdb_vote_count: '1000000'
        },
        headers: {
            'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
            'x-rapidapi-key': process.env.STREAM_API_KEY
        }
    };

    await axios.request(options).then(function (response) {
        console.log(JSON.stringify(response.data.results));
        returnArr = response.data.results;
    }).catch(function (error) {
        console.error(error);
    });

};
// getStreamList('netflix', 'series');
const returnArr = getStreamList();

console.log(returnArr)

function netflixResultCards () {
    document.getElementById('cardBox').innerHTML="";
    fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&keyword=" + userInput + "&language=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
            "x-rapidapi-key": process.env.STREAM_API_KEY
        }
    })
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)
        for (i = 0; i < data._embedded.events.length; i++) {
            // var concert = data._embedded.events[i]
            let title = ;
            let description = ;
            let cast = ;
            let platform = ;
            let coverImage = ;
            
            getHotels(city).then(function (hotels) {
                console.log(hotels)
                console.log(venue, city, artistImg, date)
                let ticketUrl = concert.url
                var suggestion = hotels[0].name
                var card = document.createElement("div")
                card.classList = "card black center-align"
                card.innerHTML = `<div class="card-content white-text">
                <span class="card-title">`+ city + `, ` + state + `</span>
                <p>`+ date + `</p>
                <p>`+ venue + `</p>
                <p>`+ address + `</p>
                <p>Need a Hotel?  `+ suggestion + `</>
                </div>
                <div class="card-action">
                <a href="`+ ticketUrl + `">Get Tickets</a>
                </div>`
                document.getElementById("cardBox").appendChild(card)
        
    })
    
    }
    })
    };

