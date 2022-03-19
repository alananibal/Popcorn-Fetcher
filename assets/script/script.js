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
// Advanced search
// URL https://imdb-api.com/API/AdvancedSearch/k_57knyc4o?title=



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
    for (var i = 0; i < data.results.length; i++) {
        console.log(data.results[i]);
        console.log(data.results[i].title);
        console.log(data.results[i].image);
        console.log(data.results[i].plot);
        console.log(data.results[i].imDbRating);
        console.log(data.results[i].stars);
        console.log(data.results[i].genres);
        

        // Title
        var movieTitle = data.results[i].title;
        var titleEl =  document.createElement("h1");
        titleEl.textContent = movieTitle;
        moviesContainer.appendChild(titleEl);
        // Poster
        var moviePoster = data.results[i].image;
        var posterEl = document.createElement("img");
        posterEl.setAttribute("src", moviePoster);
        moviesContainer.appendChild(posterEl);
        // plot
        var moviePlot = data.results[i].plot;
        var plotEl = document.createElement("h2");
        plotEl.textContent = "Plot: " + moviePlot;
        moviesContainer.appendChild(plotEl);
        // Stars
        var movieStars = data.results[i].stars;
        var starsEl = document.createElement("h2")
        starsEl.textContent = "Stars: " + movieStars;
        moviesContainer.appendChild(starsEl);

        
    }
};

// Movies Fetching
var getData = function (movie) {
// "movie" is a parameter that you name it 

    var imbdUrl = 'https://imdb-api.com/API/AdvancedSearch/k_57knyc4o?title=' + movie;
    console.log(imbdUrl);

    fetch(imbdUrl).then(function (response){
        response.json().then(function(data){
            console.log(data);
            displayMovies(data);
        });
    });
// ombd 
    // var omdbUrl = 'http://www.omdbapi.com/?apikey=a82e041&s=' + movie + '&type=movie&plot';
    // console.log(omdbUrl)
  
    // fetch(omdbUrl).then(function (response) {
        
    //     response.json().then(function (data) {
    //     console.log(data)
    //     displayMovies(data);  
    //     });
    // });
// Giphy fetching
    var giphyUrl = 'https://api.giphy.com/v1/gifs/search?q=' + movie + '&api_key=E1Nyp3nLmOcDCuxWhDaoGASokkuweu2T&limit=5';
    console.log(giphyUrl)

    fetch(giphyUrl).then(function (response) {
        response.json().then(function (data) {
        console.log(data)
        displayGifs(data);
        });
    });

// Upcoming movies fetching
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
  
  
  















































