
import React, { createContext} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../Main/MovieCards/Details";

// import ActionMoviesData from "../Main/ActionFilms/ActionMoviesData";
import ActionDetails from "../Main/ActionFilms/ActionDetails";
// import Footer from "../Footer/Footer";
// import MovieData from "../Main/MovieCards/MovieData";
// import Navbar from "../Navbar/Navbar";
// import SPotLight from "../SpotLight/SPotLight";
// import TvSeriesData from "../Main/TvSeries/TvSeriesData";
import {  useState } from "react";
import TsDetails from "../Main/TvSeries/TsDetails";
// import Main from "../Main/Main";
import Login from "../Login/Login";
// import LoginParent from "../Login/LoginParent";
import Home from "../Home/Home";
import SignUp from "../Login/SignUp";




export const movieContext = createContext();


function Router() {
  const [movie, setMovie] = useState();
  return (
    <div>
      <movieContext.Provider value={{ movie, setMovie }}>
        <BrowserRouter>
          {/* <Navbar /> */}
          {/* <SPotLight /> */}
          <Routes>
          <Route path="/" element={<SignUp/>} />
            <Route path="/signin" element={<Login />} />
            {/* <Route path="/" element={<LoginParent />} /> */}
            <Route path="/details" element={<Details />} />
            <Route path="/tsdetails" element={<TsDetails />} />
            <Route path="/actiondetails" element={<ActionDetails />} />
            <Route path="/main" element={<Home/>} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </movieContext.Provider>
    </div>
  );
}

export default Router;
