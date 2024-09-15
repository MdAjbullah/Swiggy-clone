import React, { useState } from 'react';

const ExploreRestaurants = () => {
  const [showMore, setShowMore] = useState(false);

  const exploreOptions = [
    "Explore Every Restaurant Near Me",
    "Explore Restaurants Near Me",
    "Explore Top Rated Restaurants Near Me",
  ];

  // Control how many explore options to display initially
  const visibleExploreOptions = showMore ? exploreOptions : exploreOptions.slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto py-10 mb-6">
      <h2 className="text-2xl font-bold mb-8">Explore Restaurants Near Me</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visibleExploreOptions.map((option, index) => (
          <li key={index} className="bg-white p-6 shadow rounded-lg text-center border border-gray-200">
            {option}
          </li>
        ))}
      
      </ul>
     
    </div>
  );
};

export default ExploreRestaurants;
