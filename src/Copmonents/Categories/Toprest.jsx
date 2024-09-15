import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from '../Card/Card';

const Toprest = () => {
    const [data, setData] = useState([]);
    const [slide, setSlide] = useState(0);

    const fetchTopRestaurant = async () => {
        const response = await fetch('http://localhost:5000/top-restaurant-chains');
        const apiData = await response.json();
        setData(apiData);
    };

    useEffect(() => {
        fetchTopRestaurant();
    }, []);

    const nextSlide = () => {
       console.log(slide);
       
        if (data.length <= (4*(slide+1))) return;
        setSlide(slide+1);

       
    };
    
    const prevSlide = () => {
        if (slide*4<=0) return false;
        setSlide(slide-1);
    };

    return (
        <div className='max-w-[1200px] mx-auto mb-2 px-4 sm:px-6 lg:px-8'>
            <div className='mt-3 flex items-center justify-between'>
                <div className='text-[25px] font-bold mb-3'>Top restaurant chains in Bangalore</div>
                <div className='flex'>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-slate-300 rounded-full mx-2' onClick={prevSlide}>
                        <FaArrowLeft />
                    </div>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-slate-300 rounded-full mx-2' onClick={nextSlide}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='flex overflow-hidden'>
                <div className='flex gap-5 transition-transform duration-500' style={{ transform: `translateX(-${slide * 40}%)` }}>
                    {data.map((d, i) => (
                        <Card {...d} key={i} />
                    ))}
                </div>
            </div>
            <hr className='my-4 border-[1px]' />
        </div>
    );
};

export default Toprest;