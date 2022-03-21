// OMDB
// Here is your key: a82e041
// Please append it to all of your API requests,
// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=a82e041
// Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=67bca831-879e-4649-a903-4340d4dcc727
// If you did not make this request, please disregard this email.
//
// --------------------------------------------------------------------------------------------------------
// Giphy
// Key: "E1Nyp3nLmOcDCuxWhDaoGASokkuweu2T"
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
//
// "https://www.imdb.com/title/" +
var movieValue = document.getElementById("movie-genre");
var submitBtn = document.getElementById("submit")
// where we are appending the movie Cards
var moviesContainer = document.getElementById("moviesContainer");
// where we are app gifs
var gifsContainer = document.getElementById("gifsContainer");
var saveBtn = document.getElementById("save-btn");
// saved content, empty object
var savedContentContainer = document.getElementById("saved-search");
//delete btn
var deleteBtn = document.getElementById("delete-btn");
var displayGifs = function (content) {
        gifsContainer.innerHTML = "";
    for (var i = 0; i < content.data.length; i++) {
        console.log(content.data[i].images.downsized.url);
        var gifCardEL = document.createElement("div");
        gifCardEL.setAttribute("class", "gif-card-element");
        var gifItem = document.createElement("img");
        gifItem.src = content.data[i].images.downsized.url;
        gifCardEL.appendChild(gifItem);
        gifsContainer.appendChild(gifCardEL);
    }
};
var displayMovies = function (data) {
    moviesContainer.innerHTML = "";
    for (var i = 0; i < 6; i++) {
        // console.log(data.results[i]);
        // console.log(data.results[i].title);
        // console.log(data.results[i].image);
        // console.log(data.results[i].plot);
        // console.log(data.results[i].imDbRating);
        // console.log(data.results[i].stars);
        // console.log(data.results[i].genres);
        // console.log(data.results[i].id)
        if(data.results.length > 0 ){
            // IMBD movie Id
            var movieId = data.results[i].id;
             // Movie Wrapper Card
        var movieCard = document.createElement("div");
        // movie-card-element
        movieCard.setAttribute("style", "border: 3px solid black; ");
        // Title
         var movieTitle = data.results[i].title;
         var titleEl =  document.createElement("h3");
         titleEl.setAttribute("style", "font-weight: bold");
        titleEl.textContent = movieTitle;
        // Poster
        var moviePoster = data.results[i].image;
        var posterEl = document.createElement("img");
        var posterLinkEl = document.createElement("a");
        posterEl.setAttribute("src", moviePoster);
        posterEl.setAttribute("style", "width:40%; height:40%; border: 1px solid white; display:flex; justify-content: center;");
        posterLinkEl.setAttribute("href", "https://www.imdb.com/title/" + movieId);
        posterLinkEl.appendChild(posterEl);
         // plot
        var moviePlot = data.results[i].plot;
        var plotEl = document.createElement("p");
        plotEl.setAttribute("style", "border: 1px solid white; background-color: black");
        plotEl.textContent = "Plot: " + moviePlot;
        // Stars
        var movieStars = data.results[i].stars;
        var starsEl = document.createElement("p")
        starsEl.setAttribute("style", "font-weight: bold; border: 1px solid white; background-color: black;");
        starsEl.textContent = "Stars: " + movieStars;
        // Genres
        var movieGenre = data.results[i].genres;
        var genreEl = document.createElement("p");
        genreEl.setAttribute("style", "background-color: black; border: 1px solid white;");
        genreEl.textContent = "Genre: " + movieGenre;
        movieCard.appendChild(titleEl);
        movieCard.appendChild(posterLinkEl);
        movieCard.appendChild(plotEl);
        movieCard.appendChild(starsEl);
        movieCard.appendChild(genreEl);
        moviesContainer.appendChild(movieCard);
        }
          // movieCard.setAttribute("");
        //   movieCard.appendChild(moviePoster);
        //   movieCard.appendChild(moviePlot);
        //   movieCard.appendChild(movieStars);
        //   movieCard.appendChild(movieGenre);
        //
    }
};
// Movies Fetching
var getData = function (movie) {
// "movie" is a parameter that you name it
    var imbdUrl = 'https://imdb-api.com/API/AdvancedSearch/k_q3jzuved?title=' + movie + '&title_type=feature';
    console.log(imbdUrl);
    fetch(imbdUrl).then(function (response){
        //
        response.json().then(function(data){
            console.log(data);
            // Expand this logic to create something else
            if(data.results.length === 0 ){
                console.log("error");
                alert("error");
            } else {
            displayMovies(data);
            }
        });
    });
// Giphy fetching
    var giphyUrl = 'https://api.giphy.com/v1/gifs/search?q=' + movie + '&api_key=E1Nyp3nLmOcDCuxWhDaoGASokkuweu2T&limit=5';
    console.log(giphyUrl)
    fetch(giphyUrl).then(function (response) {
        response.json().then(function (data) {
        console.log(data)
        displayGifs(data);
        });
    });
};
// var submitButton = document.getElementById("submit");
// submitButton.addEventListener();
    submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    getData(movieValue.value);
    });
// save button eventlistener
 var save = saveBtn.addEventListener("click", function() {
    console.log("clicked");
    localStorage.setItem("Data", JSON.stringify(movieValue.value));
    console.log (localStorage);
 })
 var load = function() {
     var parsedData = JSON.parse(localStorage.getItem("Data"));
     if (parsedData != null ){
        savedContentContainer.innerText = "Your Saved Search" + ":" + "  " + parsedData;
        savedContentContainer.setAttribute("style", "border: 3px solid white; font-weight: bold; background-color: #4E0032; width: 200px; height:200px;");
     }
 }
// ombd
    // var omdbUrl = 'http://www.omdbapi.com/?apikey=a82e041&s=' + movie + '&type=movie&plot';
    // console.log(omdbUrl)
    // fetch(omdbUrl).then(function (response) {
    //     response.json().then(function (data) {
    //     console.log(data)
    //     displayMovies(data);
    //     });
    // });
// Upcoming movies fetching
    // var comingSoonUrl = 'https://imdb-api.com/en/API/ComingSoon/k_57knyc4o'
    // console.log(comingSoonUrl);
    // fetch(comingSoonUrl).then(function(response){
    //     response.json().then(function(data){
    //         console.log(data);
    //     });
    // });
    load();
