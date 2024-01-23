// import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./ActionMovies.css";
// import { movieContext } from "../../Router/Router";

// function ActionMovies() {
//   const { setMovie } = useContext(movieContext);
//   const [actionMovie, setActionMovie] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://www.omdbapi.com/?apikey=3127ccc9&s=movie&type=movie&page=3")
//       .then((res) => {
//         setActionMovie(res.data.Search);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   const movieFun = (movie) => {
//     setMovie(movie);
//   };
//   return (
//     <div className="ActionMoviesCards">
//       <h2 className="ActionMoviesHeadline">ACTION MOVIES</h2>
//       <div className="ActionCardDiv">
//         {actionMovie &&
//           actionMovie?.map((movie) => (
//             <Link to={"/actiondetails"} key={movie?.imdbID}>
//               <div className="cards" onClick={() => movieFun(movie)}>
//                 <img src={movie?.Poster} alt={movie?.Title} />
//               </div>
//             </Link>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default ActionMovies;
