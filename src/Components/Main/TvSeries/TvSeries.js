// import React, { useState, useEffect } from "react";
// import './TvSeries.css'
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { movieContext } from "../../Router/Router";

// function TvSeries() {
//   const { setMovie } = useContext(movieContext);
//   const [tvSeries, setTvSeries] = useState([]);

//   useEffect(() => {
//     axios
//       .get('https://www.omdbapi.com/?apikey=3127ccc9&s=series&type=series&page=1') 
//       .then((res) => {
//         setTvSeries(res.data.Search);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []); 

//   const movieFun = (movie) => {
//     setMovie(movie);
//   }

//   return (
//     <div className="TvSeriesCards">
//       <h2 className="TseriesHeadline">Tv Series</h2>
//       <div className="TcardDiv">
//         {tvSeries && tvSeries.map((series) => (
//           <Link to={'/tsdetails'} key={series.imdbID}>
//             <div className="cards" onClick={() => movieFun(series)}>
//               <img src={series?.Poster} alt={series?.Title} />
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TvSeries;









 {/* <div className="movieCards">
         <h2 className="moviesHeadline">MOVIES</h2>
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
      </div> */}
      {/* <div className="TvSeriesCards">
        <h2 className="TseriesHeadline">Tv Series</h2>
        <div className="TcardDiv">
          {tvSeries &&
            tvSeries.map((series) => (
              <Link to={"/tsdetails"} key={series.imdbID}>
                <div className="cards" onClick={() => movieFun(series)}>
                  <img src={series?.Poster} alt={series?.Title} />
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className="ActionMoviesCards">
        <h2 className="ActionMoviesHeadline">ACTION MOVIES</h2>
        <div className="ActionCardDiv">
          {actionMovie &&
            actionMovie?.map((movie) => (
              <Link to={"/actiondetails"} key={movie?.imdbID}>
                <div className="cards" onClick={() => movieFun(movie)}>
                  <img src={movie?.Poster} alt={movie?.Title} />
                </div>
              </Link>
            ))}
        </div>
      </div> */}