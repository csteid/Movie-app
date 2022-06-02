import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";


// The useState Hook allows us to track state in a function component.  State generally refers to data or properties that need to be tracking in an application. First we need to initialize our state.  Set the initial state to an empty string: useState('')
// The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!
// We could create multiple state Hooks to track individual values.


const LandingPage = () => {
  // movie is the current state, setMovie is used to update our state.  
  const [movie, setMovie] = useState("");
  // movieName is the current state, setMovieName is used to update our state
  const [movieName, setMovieName] = useState("");
  const apiKey = "bb5872cb";

  const getMoviesByName = async (name) => {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${name}`;
    const response = await axios.get(url);
    setMovie(response.data);
  };

  const getMoviesById = async (id) => {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
    const response = await axios.get(url);
    setMovie(response.data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getMoviesByName(movieName);
  };

  return (
    <div className="landing-container">
      <h1>Welcome to my movie app!</h1>
      <form>
        <input
          type="text"
          placeholder="Movie Name"
          value={movieName}
          onChange={(e) => setMovieName(e.currentTarget.value)}
        />
        
        <button onClick={onSubmit}>Submit</button>
      </form>
      <div>
        <MovieCard movieData={movie} />
      </div>
    </div>
  );
};

export default LandingPage;






