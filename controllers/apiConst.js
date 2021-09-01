//* streaming services by country available 2021-08-30
// import axios from "axios";
// const options = {
//   method: 'GET',
//   url: 'https://streaming-availability.p.rapidapi.com/countries',
//   headers: {
//     'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
//     'x-rapidapi-key': process.env.STREAM_API_KEY
//   }
// };
// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
const streamByCntyCd = {
    "all4": ["gb", "ie"],
    "apple": ["ie", "es", "nl", "gb", "pl", "lv", "ch", "dk", "se", "no", "it", "md", "in", "cz", "gr", "ua", "ca", "pt", "mx", "ru", "bg", "cy", "fi", "be", "ae", "at", "ee", "th", "de", "az", "fr", "br", "vn", "sg", "us", "jp", "il", "hk", "za", "pa", "au", "ph", "cl", "ar", "nz"],
    "britbox": ["gb", "us", "ca", "au", "za"],
    "crave": ["ca"],
    "disney": ["ca", "gb", "us", "nl", "au", "nz", "at", "de", "it", "es", "ch", "fr", "be", "dk", "fi", "no", "pt", "se", "ar", "br", "cl", "co", "mx"],
    "hbo": ["us", "ar", "br", "cl", "co", "ec", "mx", "pe", "ve"],
    "hulu": ["us"],
    "iplayer": ["gb"],
    "mubi": ["ch", "il", "pt", "ru", "be", "es", "lv", "at", "mk", "pl", "md", "ua", "rs", "se", "jp", "ee", "ca", "cy", "ro", "bg", "dk", "fi", "nl", "fr", "az", "gb", "no", "gr", "de", "hk", "us", "it", "ae", "sg", "ie", "vn", "pa", "za", "cl", "au", "nz", "tr", "ar", "th", "in", "br", "ph", "mx", "hr"],
    "netflix": ["ar", "at", "au", "be", "br", "ca", "ch", "cl", "co", "cz", "de", "dk", "ec", "ee", "es", "fi", "fr", "gb", "gr", "hu", "id", "ie", "in", "it", "jp", "kr", "lt", "lv", "mx", "my", "nl", "no", "nz", "pe", "ph", "pl", "pt", "ro", "ru", "se", "sg", "th", "tr", "us", "ve", "za"],
    "now": ["gb", "ie", "it"],
    "paramount": ["us"],
    "peacock": ["us"],
    "prime": ["hr", "au", "de", "is", "th", "ph", "ru", "mx", "no", "ch", "il", "ae", "za", "mk", "be", "br", "ca", "lv", "sg", "gb", "ar", "ee", "at", "dk", "fr", "ro", "es", "cy", "hk", "rs", "gr", "it", "se", "tr", "ua", "cz", "ie", "jp", "nl", "us", "pa", "vn", "bg", "fi", "md", "nz", "pt", "in", "pl", "cl", "az"],
    "showtime": ["us"],
    "starz": ["us"]
};

//* generes available 2021-08-30
// import axios from "axios";
// const options = {
//   method: 'GET',
//   url: 'https://streaming-availability.p.rapidapi.com/genres',
//   headers: {
//     'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
//     'x-rapidapi-key': process.env.STREAM_API_KEY
//   }
// };
// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
const genreID = {
    "1": "Biography",
    "10402": "Music",
    "10749": "Romance",
    "10751": "Family",
    "10752": "War",
    "10763": "News",
    "10764": "Reality",
    "10767": "Talk Show",
    "12": "Adventure",
    "14": "Fantasy",
    "16": "Animation",
    "18": "Drama",
    "2": "Film Noir",
    "27": "Horror",
    "28": "Action",
    "3": "Game Show",
    "35": "Comedy",
    "36": "History",
    "37": "Western",
    "4": "Musical",
    "5": "Sport",
    "53": "Thriller",
    "6": "Short",
    "7": "Adult",
    "80": "Crime",
    "878": "Science Fiction",
    "9648": "Mystery",
    "99": "Documentary"
};