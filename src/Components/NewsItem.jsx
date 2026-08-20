import React from "react";
import PropTypes from "prop-types";

const NewsItem = ({ data, id }) => {
  if (!data) return null;

  // Generate placeholder URL with 600x400 dimensions
  const placeholderUrl =
    "https://placehold.co/600x400/gray/white?text=News+Image";

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white h-full flex flex-col border border-gray-200">
      {/* Image section with placeholder fallback */}
      <div className="w-full h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
        <img
          src={data.urlToImage || placeholderUrl}
          className="w-full h-full object-cover"
          alt={data.title || "News image"}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = placeholderUrl;
          }}
        />
      </div>

      {/* Content section */}
      <div className="p-4 flex-1">
        <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2">
          {data.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">{data.description}</p>
      </div>

      {/* Footer with Read More button */}
      <div className="p-4 border-t border-gray-100">
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2 px-4 rounded-md transition-colors"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  data: PropTypes.object,
  id: PropTypes.number,
};

export default NewsItem;
