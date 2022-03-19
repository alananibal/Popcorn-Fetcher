// OMDB
// Here is your key: a82e041

// Please append it to all of your API requests,

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=a82e041

// Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=67bca831-879e-4649-a903-4340d4dcc727
// If you did not make this request, please disregard this email.
// 
// 
// --------------------------------------------------------------------------------------------------------
// Giphy
// Key: "E1Nyp3nLmOcDCuxWhDaoGASokkuweu2T"
// 
// 
// 
// ----------------------------------------------------------------------------------------------------
// IMDB
// Key
// In theatres
// URL: https://imdb-api.com/en/API/InTheaters/k_57knyc4o
// Coming sooon
// URL https://imdb-api.com/en/API/ComingSoon/k_57knyc4o



var movieValue = document.getElementById("movie-genre");
var submitBtn = document.getElementById("submit")
var moviesContainer = document.getElementById("moviesContainer")



var displayGifs = function (content) {
    for (var i = 0; i < content.data.length; i++) {
        console.log(content.data[i].images.downsized.url);
        
        // var gifAddress = content.data[i].embed_url;
        var gifItem = document.createElement("img");
       
        gifItem.src = content.data[i].images.downsized.url;
        moviesContainer.appendChild(gifItem);
    }
};

var displayMovies = function (data) {
    for (var i = 0; i < data.Search.length; i++) {
        console.log(data.Search[i].Title);
        console.log(data.Search[i].Poster);

        // Title
        var movieTitle = data.Search[i].Title;
        var titleEl =  document.createElement("h1");
        titleEl.textContent = movieTitle;
        moviesContainer.appendChild(titleEl);
        // Poster
        var moviePoster = data.Search[i].Poster;
        var posterEl = document.createElement("img");
        posterEl.setAttribute("src", moviePoster);
        moviesContainer.appendChild(posterEl);
        
    }
};

// OMBD Fetching
var getData = function (movie) {
// "movie" is a parameter that you name it 
   
    var omdbUrl = 'http://www.omdbapi.com/?apikey=a82e041&s=' + movie + '&type=movie';
    console.log(omdbUrl)
  
    fetch(omdbUrl).then(function (response) {
        
        response.json().then(function (data) {
        console.log(data)
        displayMovies(data);  
        });
    });
// Giphy fetching
    var giphyUrl = 'https://api.giphy.com/v1/gifs/search?q=' + movie + '&api_key=E1Nyp3nLmOcDCuxWhDaoGASokkuweu2T&limit=10';
    console.log(giphyUrl)

    fetch(giphyUrl).then(function (response) {
        response.json().then(function (data) {
        console.log(data)
        displayGifs(data);
        });
    });

// IMDB fetching
    // var comingSoonUrl = 'https://imdb-api.com/en/API/ComingSoon/k_57knyc4o'
    // console.log(comingSoonUrl);

    // fetch(comingSoonUrl).then(function(response){
    //     response.json().then(function(data){
    //         console.log(data);

    //     });
    // });


};

// var submitButton = document.getElementById("submit");
// submitButton.addEventListener();
  
    submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    getData(movieValue.value);
    });
  
  
  















































