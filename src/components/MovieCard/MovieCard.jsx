import React from "react";
import MovieDetails from "../MovieDetails/MovieDetails";
import "./MovieCard.css";

const MovieCard = ({ movieData }) => {
  return (
    <div>
      <MovieDetails
        Title={movieData.Title}
        Year={movieData.Year}
        imdbID={movieData.imdbID}
        Type={movieData.Type}
        Poster={movieData.Poster}
      />
    </div>
  );
};

export default MovieCard;
