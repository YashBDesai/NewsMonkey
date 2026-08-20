// App.js
import "./index.css";
import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import NewsItem from "./Components/NewsItem";
import Navbar from "./Components/Navbar";
import Home from "./Components/home";
import About from "./Components/About";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";


function App() {
  const [progress, setProgress] = useState(10);
  return (
    <>
      <Navbar />
      <LoadingBar 
      height = {8}
      color="#f11946" progress={1000} />
      <Routes>
        <Route
          path="/"
          element={
            <NewsItem
              setProgress={setProgress}
              title="React 2025 Released!"
              description="The latest version of React is now available with major performance improvements and new hooks."
              imageUrl="https://via.placeholder.com/286x180"
              newsUrl="https://reactjs.org"
            />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
