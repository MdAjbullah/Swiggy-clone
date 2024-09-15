import React, { useState } from 'react';

const BestCuisines = () => {
  const [showMore, setShowMore] = useState(false);

  const cuisines = [
    "Chinese Restaurant Near Me",
    "South Indian Restaurant Near Me",
    "Indian Restaurant Near Me",
    "Kerala Restaurant Near Me",
    "Korean Restaurant Near Me",
    "North Indian Restaurant Near Me",
    "Seafood Restaurant Near Me",
    "Bengali Restaurant Near Me",
    "Punjabi Restaurant Near Me",
    "Italian Restaurant Near Me",
    "Andhra Restaurant Near Me",
  ];

  // Control how many cuisines to display initially
  const visibleCuisines = showMore ? cuisines : cuisines.slice(0, 7);

  return (
    <div className="max-w-7xl mx-auto  px-4">
      <h2 className="text-2xl font-bold  mb-8">Best Cuisines Near Me</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleCuisines.map((cuisine, index) => (
          <li key={index} className="bg-white p-6 shadow rounded-lg text-center border border-gray-200">
            {cuisine}
          </li>
        ))}
         <div className="text-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
      </ul>
     
      <hr className='my-6 border-[1px]' />
    </div>
  );
};

export default BestCuisines;
