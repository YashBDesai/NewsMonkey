import React, { useState } from "react";
import Navbar from "./Navbar"; // Optional if you have a navbar component
import { news } from "../data"; // Static news data

const NewsCard = ({ data, id }) => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = getPlaceholderUrl(data.title);
  };

  const getPlaceholderUrl = (title) => {
    const text = title
      ? encodeURIComponent(title.substring(0, 30))
      : "News+Image";
    return `https://placehold.co/600x400/1e1e2e/cbd5e1?text=${text}`;
  };

  // ✅ Text-to-Speech function
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };
  // ✅ Stop Function
  const stopSpeaking = () => {
    speechSynthesis.cancel(); // Stop current speech
  };

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-gray-700 h-full flex flex-col transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-tr from-indigo-800 to-violet-600">
      {/* Image section */}
      <div className="w-full  bg-gray-700 overflow-hidden relative rounded-sm">
        <img
          src={data.urlToImage || getPlaceholderUrl(data.title)}
          className="w-full h-full object-cover"
          alt={data.title || "News image"}
          onError={handleImageError}
          loading="lazy"
        />
        <div className="absolute bottom-2 left-2 bg-purple-600/95 text-white text-xs px-2 py-1 rounded">
          {data.category || "General"}
        </div>
      </div>

      {/* Content section */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-lg mb-2 text-white line-clamp-2">
          {data.title}
        </h3>
        <p className="text-gray-300 text-sm line-clamp-3 mb-4">
          {data.description || "No description available"}
        </p>

        {/* 🔊 Listen Button */}
        <div className="flex gap-3 mt-2">
          <button
            onClick={() => speak(`${data.title}. ${data.description}`)}
            className="bg-white text-black text-sm px-4 py-2 rounded-lg  hover:text-white transition-all"
          >
            🔊 Listen
          </button>
          <button
            onClick={stopSpeaking}
            className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-900 transition-all"
          >
            🛑 Stop
          </button>
        </div>

        <div className="mt-auto">
          <div className="flex items-center text-xs text-gray-400 mt-3">
            <span>{new Date(data.publishedAt).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{data.source?.name || "Unknown source"}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5">
        <a
          href={data.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentNews = news.slice(startIndex, endIndex);
  const totalPages = Math.ceil(news.length / itemsPerPage);
  

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="relative w-full min-h-screen p-4 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/Bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentNews.map((entry, index) => (
            <NewsCard key={index} data={entry} id={index} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-sky-300 text-black font-sans rounded-lg disabled:opacity-50 hover:bg-sky-900"
          >
            Previous
          </button>
          <span className="text-white font-bold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-sky-300 text-black font-sans rounded-lg disabled:opacity-50 hover:bg-sky-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
