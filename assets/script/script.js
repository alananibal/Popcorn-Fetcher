var movieValue = document.getElementById("movie-genre");
var submitBtn = document.getElementById("submit")

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
// Fandango Application Registration
// Application Registered!
// Your API keys are:

// Discovery API: production
// Key: 2nd2982pfmmuzbswvubfe2pk
// Application
// Critic Menu
// Key:
// 2nd2982pfmmuzbswvubfe2pk
// Secret:
// tS4VGqUbD4
// http://api.fandango.com/<version>?op=<operation>&<parameter list>&apikey=<apikey>&sig=<sig>


// OMBD Fetching
var getData = function (movie) {
// "movie" is a parameter that you name it 
   
    var omdbUrl = 'http://www.omdbapi.com/?apikey=a82e041&s=' + movie + '&type=movie';
        console.log(omdbUrl)
  
        fetch(omdbUrl).then(function (response) {
        
            response.json().then(function (data) {
            console.log(data)
            });
    });


// Giphy fetching
    var giphyUrl = 'https://api.giphy.com/v1/gifs/search?q=' + movie + '&api_key=E1Nyp3nLmOcDCuxWhDaoGASokkuweu2T&limit=10';
        console.log(giphyUrl)
        fetch(giphyUrl).then(function (response) {
        
            response.json().then(function (data) {
            console.log(data)
            
                
            });
        
        });
};
  // var submitButton = document.getElementById("submit");
  // submitButton.addEventListener();  
    submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    getData(movieValue.value);
});
  
  
  














































