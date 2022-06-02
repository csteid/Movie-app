import React from "react";
import "./MovieDetails.css";

const MovieDetails = ({ Title, Year, imdbID, Type, Poster,Plot }) => {
  return (
    <div className="details-container">
      <img src={Poster} alt={`${Title} poster.`} />
      <div>
        <h1>{Title}</h1>
        <h2>Year: {Year}</h2>
        <h2>IMDB ID: {imdbID}</h2>
        <p>Plot: {Plot}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
