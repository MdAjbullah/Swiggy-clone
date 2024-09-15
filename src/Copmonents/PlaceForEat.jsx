import React, { useState } from 'react';

const BestRestaurants = () => {
  const [showMore, setShowMore] = useState(false);

  const cities = [
    "Best Restaurants in Bangalore",
    "Best Restaurants in Pune",
    "Best Restaurants in Mumbai",
    "Best Restaurants in Delhi",
    "Best Restaurants in Hyderabad",
    "Best Restaurants in Kolkata",
    "Best Restaurants in Chennai",
    "Best Restaurants in Chandigarh",
    "Best Restaurants in Ahmedabad",
    "Best Restaurants in Jaipur",
    "Best Restaurants in Nagpur",
  ];

 
  const visibleCities = showMore ? cities : cities.slice(0, 7);

  return (
    <div className="max-w-7xl mx-auto py-5 ">
      <h2 className="text-2xl font-bold  mb-4">Best Places to Eat Across Cities</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleCities.map((city, index) => (
          <li key={index} className="bg-white p-4 shadow rounded-lg text-center border border-gray-200 ">
            {city}
          </li>
        ))}
         <div className="text-center mt-6">
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

export default BestRestaurants;
