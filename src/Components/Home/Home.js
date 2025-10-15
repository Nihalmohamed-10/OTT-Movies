

import React from "react";
import "../SpotLight/SpotLight.css";
import StyledButton from "../SpotLight/SpotLightButton";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { movieContext } from "../Router/Router";
import "../Main/MovieCards/MovieCard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Footer/Footer.css";
import "../Navbar/Navbar.css";
import MovieCard from "../Main/MovieCards/MovieCard";
import Loader from "../Loader.js/Loader";

function Home() {
  const location = useLocation();
  const [moviesData, setMoviesData] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);
  const [actionMovie, setActionMovie] = useState([]);
  const { movie, setMovie } = useContext(movieContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?apikey=3127ccc9&s=movie&type=movie&page=7")
      .then((res) => {
        setMoviesData(res.data.Search);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?apikey=3127ccc9&s=movie&type=movie&page=3")
      .then((res) => {
        setActionMovie(res.data.Search);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://www.omdbapi.com/?apikey=3127ccc9&s=series&type=series&page=1"
      )
      .then((res) => {
        setTvSeries(res.data.Search);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return location.pathname !== "/signin" ? (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="NavbarDiv">
            <div className="Navbar">
              <a href="/main">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                  alt="netflix"
                />
              </a>
            </div>
            <div className="navigation">
              <input type="checkbox" className="toggle-menu" />
              <div className="hamburger"></div>
              <ul className="navbarList">
                <li>
                  <a href="/main">Home</a>
                </li>
                <li>
                  <a href="#">Movies</a>
                </li>
                <li>
                  <a href="#">Tv Series</a>
                </li>
                <li>
                  <a href="#">Streams</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="SpotLight">
            <div className="spotImg">
              <img src={movie?.Poster} alt="img" />
            </div>
            <div className="SpotContent">
              <div className="SpotLightButton">
                <StyledButton>Play</StyledButton>
                <StyledButton>My List</StyledButton>
              </div>
            </div>
          </div>

          <MovieCard
            title="movies"
            setMovie={setMovie}
            moviesData={moviesData}
          />
          <MovieCard
            title="Tv Series"
            setMovie={setMovie}
            moviesData={tvSeries}
          />
          <MovieCard
            title="Action Movies"
            setMovie={setMovie}
            moviesData={actionMovie}
          />
          <div className="footer">
            <div className="footerFlex">
              <div className="footerUl">
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Investor Relations</a>
                  </li>
                  <li>
                    <a href="#">Ways to Watch</a>
                  </li>
                  <li>
                    <a href="#">Corporate Information</a>
                  </li>
                  <li>
                    <a href="#">Netflix Originals</a>
                  </li>
                </ul>
              </div>
              <div className="footerUl">
                <ul>
                  <li>
                    <a href="#">Help center</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Ways to Watch</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="footerUl">
                <ul>
                  <li>
                    <a href="#">Account</a>
                  </li>
                  <li>
                    <a href="#">Redeem Gift Card</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Speed Test</a>
                  </li>
                </ul>
              </div>
              <div className="footerUl">
                <ul>
                  <li>
                    <a href="#">Media Center</a>
                  </li>
                  <li>
                    <a href="#">Bye Gift cards</a>
                  </li>
                  <li>
                    <a href="#">Cookie Preferences</a>
                  </li>
                  <li>
                    <a href="#">Legal Notices</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : null;
}

export default Home;
