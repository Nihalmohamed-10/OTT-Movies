import React from "react";
import "./MovieCard.css";
import { movieContext } from "../../Router/Router";
import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

function Details() {
  const { movie } = useContext(movieContext);

  console.log(movie);

  return (
    <div className="container">
      <h2>More About</h2>
      <div className="close"><Link to="/main"><IoMdClose /></Link> </div>
      <div className="movie-details">
        <div className="moviePDiv">
          <p>Title: {movie.Title}</p>
          <p>Year: {movie.Year}</p>
          <button>Play</button>
          <button>Add to Fav</button>
        </div>
        <div className="movieImgDiv">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      </div>
    </div>
  );
}

export default Details;
