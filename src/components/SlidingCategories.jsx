import React, { useState } from 'react';

const SlidingCategories = () => {
  const categories = [
    { name: 'Movies', color: 'bg-red-100', hoverRing: 'ring-red-500' },
    { name: 'Books', color: 'bg-blue-100', hoverRing: 'ring-blue-500' },
    { name: 'Music', color: 'bg-yellow-100', hoverRing: 'ring-yellow-500' },
    { name: 'Art', color: 'bg-green-100', hoverRing: 'ring-green-500' },
    { name: 'Sports', color: 'bg-purple-100', hoverRing: 'ring-purple-500' },
    { name: 'Technology', color: 'bg-pink-100', hoverRing: 'ring-pink-500' },
    { name: 'Fashion', color: 'bg-indigo-100', hoverRing: 'ring-indigo-500' },
    { name: 'Travel', color: 'bg-teal-100', hoverRing: 'ring-teal-500' },
    { name: 'Food', color: 'bg-orange-100', hoverRing: 'ring-orange-500' },
    { name: 'Health', color: 'bg-gray-100', hoverRing: 'ring-gray-500' },
    { name: 'Education', color: 'bg-lime-100', hoverRing: 'ring-lime-500' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
//   };

  return (
    <div className="p-2 relative w-full max-w-6xl mx-auto">
      <div className="flex overflow-hidden">
        <div className="flex space-x-6 transition-transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-4 w-32 flex-shrink-0 flex flex-col items-center cursor-pointer"
            >
              <a href={`#${category.name.toLowerCase()}`} className="group">
                <div
                  className={`${category.color} rounded-full w-24 h-24 flex items-center justify-center text-gray-700 text-xl font-bold transition-all group-hover:ring-4 ${category.hoverRing}`}
                >
                  {category.name[0]}
                </div>
                <p className="mt-4 text-gray-700 font-semibold text-center">{category.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &gt;
      </button> */}
    </div>
  );
};

export default SlidingCategories;
