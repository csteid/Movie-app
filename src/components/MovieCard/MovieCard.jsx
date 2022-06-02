import React from "react";
import MovieDetails from "../MovieDetails/MovieDetails";
import "./MovieCard.css";

const MovieCard = ({ movieData }) => {
  return (
    <div>
      {movieData && (
        <MovieDetails
          Title={movieData.Title}
          Year={movieData.Year}
          imdbID={movieData.imdbID}
          Type={movieData.Type}
          Poster={movieData.Poster}
          Plot={movieData.Plot}
        />
      )}
    </div>
  );
};
      
export default MovieCard;
