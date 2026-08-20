// App.js
import "./index.css";
import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/home";
import About from "./Components/About";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";


function App() {
  return (
    <>
      <Navbar />
      <LoadingBar 
      height = {8}
      color="#f11946" progress={1000} />
      <Routes>
        <Route path="/" element={<Navigate to="/news" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
