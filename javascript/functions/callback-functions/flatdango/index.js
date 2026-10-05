//Define the Problem
//Scenario
/* 
Flatdango needs a feature that displays movie details when a user searches for a movie title.
You will create a callback function to dynamically retrieve and display movie details, such as runtime, showtime, and description.
*/
//Objective
/*
Set up a function getMovieDetails that accepts a movie title and a callback function as arguments.
Use the callback to process and display movie details dynamically.
*/

const movieTitles = [
    "The Giant Gila Monster",
    "Manos: The Hands Of Fate",
    "Time Chasers"
];
//Create the getMovieDetails function 
function getMovieDetails(movieTitle, getMovieMessage) {
    //Add movie details
    // Create the movie object
    const movie = {
        title: movieTitle
    };
    //Add movie information 
    if(movie.title === "The Giant Gila Monster"){
        movie.runtime = "108 minutes";
        movie.showtime = "7:00 PM";
        movie.description = "A giant gila monster terrorizes a small town.";
    } 
    else if(movie.title === "Manos:The Hands of Fate"){
        movie.runtime = "95 minutes";
        movie.showtime = "8:00 PM";
        movie.description = "A group of travelers encounter a mysterious cult.";
    } 
    else if(movie.title === "Time Chasers") {
        movie.runtime = "90 minutes";
        movie.showtime = "9:00 PM";
        movie.description = "A scientist invents a time machine and travels to the future.";
    };
    //Use the Callback Function
    // Call the callback function 
    return getMovieMessage(movie);
    
}
//Pass Arguments to getMovieDetails
const movieMessage = getMovieDetails(movieTitles[0], (movie) => {
    return `${movie.title} is ${movie.runtime} long and starts at ${movie.showtime}.  Here is the movie description:${movie.description}`;
});

 

console.log (movieMessage);