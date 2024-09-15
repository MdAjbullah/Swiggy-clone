import React, { useState, useEffect, useRef } from 'react';
import Card from '../src/Copmonents/Card/Card'; 

let OnlineDelivery = () => {
    const [data, setData] = useState([]);
    const componentsRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (componentsRef.current) {
                const rect = componentsRef.current.getBoundingClientRect();
                setIsAtTop(rect.top <= 0);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const fetchTopRestaurant = async () => {
        const response = await fetch('http://localhost:5000/top-restaurant-chains');
        const apiData = await response.json();
        setData(apiData);
    };

    useEffect(() => {
        fetchTopRestaurant();
    }, []);

    return (
        <div className='max-w-[1200px] mx-auto mb-2' ref={componentsRef}>
            <div className='my-3 flex items-center justify-between'>
                <div className='text-[25px] font-bold '>Restaurants with online food delivery in Bangalore</div>
            </div>
            <div className={isAtTop ? 'fixed top-0 z-[99999] bg-white w-full' : ''}>
                <div className='max-w-[1200px] mx-auto flex flex-wrap my-4 gap-3'>
                    <div className='p-3 rounded-md shadow'>Filter</div>
                    <div className='p-3 rounded-md shadow'>Sort By</div>
                    <div className='p-3 rounded-md shadow'>Fast Delivery</div>
                    <div className='p-3 rounded-md shadow'>New on Swiggy</div>
                    <div className='p-3 rounded-md shadow'>Ratings 4.0+</div>
                    <div className='p-3 rounded-md shadow'>Pure Veg</div>
                    <div className='p-3 rounded-md shadow'>Offers</div>
                    <div className='p-3 rounded-md shadow'>Rs. 300-Rs. 600</div>
                    <div className='p-3 rounded-md shadow'>Less than Rs. 300</div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6'>
                {data.map((d, i) => (
                    <Card {...d} key={i} />
                ))}
            </div>
            <hr className='my-6 border-[1px]' />
        </div>
    );
};

export default OnlineDelivery;