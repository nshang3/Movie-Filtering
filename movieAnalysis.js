let mov = require(`./movies-250.json`);//Do not touch

let getBestMovieBasedOn = function(genre, minHours, database){

   let filteredByGenre =database.movies.filter((movieObj) => movieObj.Genre.includes(genre))

   let filteredByHours = filteredByGenre.filter((movieObj) => parseFloat(movieObj.Runtime) > minHours * 60);
   
//    console.log(filteredByGenre.Title);

    const sortedByIMDB = filteredByHours.reduce((movie1, movie2) =>
         parseInt(movie1.imdbRating) > parseInt(movie2.imdbRating) ? movie2 : movie1
   );


   return `${sortedByIMDB.Title} released in ${sortedByIMDB.Year} is the highest rated ${genre} movie over 2 hour(s) long, with an imdb rating of ${sortedByIMDB.imdbRating}`;
}


 //Do not touch
console.log(getBestMovieBasedOn('Romance',2, mov));
module.exports=getBestMovieBasedOn;



