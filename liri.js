require("dotenv").config();

var axios = require("axios");
var movie = "Mr. Nobody";

// Use axios to search OMDB for film info
axios.get("http://www.omdbapi.com/?t="+movie+"&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    var title = "Film Title: "+ response.data.Title;
    var year = "Year Released: "+ response.data.Year;
    var imdb  = "IMDB Rating: "+ response.data.imdbRating;
    var rotten  = "Rotten Tomatoes Rating: "+ response.data.Metascore;
    var country  = "Country: "+ response.data.Country;
    var language  = "Language: "+ response.data.Language;
    var plot  = "Plot: "+ response.data.Plot;
    var cast  = "Cast: "+ response.data.Actors;

    
    // console.log(response);
    // console.log(title +"\n" + year +"\n" + imdb +"\n" + rotten +"\n" + country +"\n" + language +"\n" + plot +"\n" + cast);
    console.log("------------------------");
  }
);

var Spotify = require('node-spotify-api');
 
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var songTitle = "The Sign Ace of Base"
spotify
  .search( { type: 'album,artist,track', query: songTitle, limit: 1 })
  .then(function(response) {
    var path = response.tracks.items[0]
    var artist = path.artists[0].name;
    var song = path.name;
    var link = path.preview_url;
    var album = path.album.name;

    console.log(artist +"\n" + song +"\n" + link +"\n"+album);
  })
  .catch(function(err) {
    console.log(err);
  });

// concert-this

// spotify-this-song

// movie-this

// do-what-it-says