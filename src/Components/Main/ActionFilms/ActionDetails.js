import React from "react";
import './ActionMovies.css'
import { movieContext } from "../../Router/Router";
import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
function ActionDetails() {
 const {movie}= useContext(movieContext)
 return (
  <div className="container">
    <h2> More About</h2>
    <div className="close"><Link to="/main"><IoMdClose /></Link> </div>
    <div className="movie-details">
      <div className="moviePDiv">
        <p>Title: {movie.Title}</p>
        <p>Year: {movie.Year}</p>
        <button>Play</button>
          <button>Add to Fav</button>
      </div>
      <div className="movieImgDiv"><img src={movie.Poster} alt={movie.Title} /></div>
    </div>
  </div>
);
  console.log(movie);
}

export default ActionDetails;