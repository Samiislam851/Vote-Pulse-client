import React from 'react';

const Banner = () => {
    return (
        <div className='font-sans flex md:flex-row flex-col md:text-end justify-center gap-10 items-center py-40 mx-auto w-[90%]'>
            <div className='basis-[50%]'>
                <h2 className='text-3xl md:text-6xl text-center md:text-end text-gray-700 font-sans md:hover:translate-x-[-20px] duration-500 transition-all ease-in-out font-semibold'>Voting done right with the right help you need</h2>
                <p className='text-gray-500 text-base md:float-right mx:auto mt-6 w-[70%] md:hover:translate-x-[-20px] duration-500 transition-all ease-in-out text-center md:text-end mx-auto'>Your trusted source for a seamless voting experience. Access comprehensive resources, simplified procedures, and reliable support, empowering you to make informed decisions and actively participate in the democratic process.</p>
            </div>
            <div className=' basis-[50%] w-full h-auto'>
                <img src="https://www.parisschoolofeconomics.eu/IMG/arton8422.png" className='rounded-lg hover:scale-105 transition-all duration-500 hover:shadow-2xl ease-in-out' alt="image" />
                </div>
        </div>
    );
};

export default Banner;