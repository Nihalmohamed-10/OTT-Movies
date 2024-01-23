import React from 'react'
import { Link } from 'react-router-dom'


function MovieCard({title, moviesData, setMovie}) {

    const movieFun = (movie) => {
        setMovie(movie);
      };
  return (
    <div className="movieCards">
         <h2 className="moviesHeadline">{title}</h2>
         <div className="cardDiv">
           {moviesData &&
            moviesData.map((movie) => (
              <Link to={"/details"} key={movie?.imdbID}>
                <div className="cards" onClick={() => movieFun(movie)}>
                  <img src={movie?.Poster} alt={movie?.Title} />
                </div>
              </Link>
            ))}
        </div>
      </div>
  )
}

export default MovieCard























