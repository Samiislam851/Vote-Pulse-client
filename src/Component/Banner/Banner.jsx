import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Banner = () => {
    return (
        <div className='py-24 my-20 bg-[#ECEEEF] '>
            <div className='max-w-[1600px] md:px-12 mx-auto'>
                <div className=''>
                    <h2 className='my-font text-5xl text-gray-700 font-semibold md:font-bold text-center'>Voting done right with the right help you need</h2>
                    <p className='text-gray-500 text-base md:text-xl  mx:auto mt-7 mb-14 w-[90%] duration-500 transition-all ease-in-out text-center  mx-auto'>Your trusted source for a seamless voting experience. Access comprehensive resources, simplified procedures, and reliable support, empowering you to make informed decisions and actively participate in the democratic process.</p>
                </div>

                <div className='grid grid-cols-1 gap-10 md:grid-cols-3 px-10 mt-10'>
                    <div>
                        <div className='w-80% bg-white pt-10 px-5 rounded-b-lg text-center md:hover:scale-105 transition-all duration-300 border-t-green-700 border-t-[4px]'>
                            <h2 className='text-4xl font-semibold text-gray-600 py-4 text-center'>Set Up Voting Yourself</h2>
                            <p className='text-lg text-gray-400 py-5'>With very friendly and guided user interface you can easily create an election But for this you have to signed in as an Admin</p>
                            <button className='text-orange-400 text-xl border border-orange-400 border-[3px] px-5 py-3 rounded-lg hover:bg-orange-400 hover:scale-105 hover:text-white transition-all duration-300 '>See how to create Election
                            <BsFillArrowRightCircleFill className='inline mx-2' />
                            </button>
                            <div className='w-full'><img className='image-full mx-auto pt-10' src="/bannermini2.png" alt="" /></div>
                            
                        </div>
                    </div>
                    <div>
                        <div className='w-80% bg-white pt-10 px-5 rounded-b-lg text-center hover:scale-105 transition-all duration-300 border-t-orange-400 border-t-[4px]'>
                            <h2 className='text-4xl font-semibold text-gray-600 py-4 text-center '>Manage your Election</h2>
                            <p className='text-lg text-gray-400 py-5'>You can take instructions <br />or suggestions from our voting experts. Who can guide you through the whole process</p>
                            <button className='text-orange-400 text-xl border border-orange-400 border-[3px] px-5 py-3 rounded-lg hover:bg-orange-400 hover:scale-105 hover:text-white transition-all duration-300'>How to manage election   <BsFillArrowRightCircleFill className='inline mx-2' /></button>
                            <div className='w-full'><img className='image-full mx-auto pt-10' src="/bannermini3.png" alt="" /></div>
                        </div>
                    </div>
                    <div>
                        <div className='w-80% bg-white pt-10 px-5 rounded-b-lg text-center hover:scale-105 transition-all duration-300 border-t-blue-400 border-t-[4px]'>
                            <h2 className='text-4xl font-semibold text-gray-600 py-4 text-center'>Manage users as Admin</h2>
                            <p className='text-lg text-gray-400 py-5'>With very friendly and guided user interface you can easily manage users of your voting. you can make a candidate from a regular user or vice versa</p>
                            <button className='text-orange-400 text-xl border border-orange-400 border-[3px] px-5 py-3 rounded-lg hover:bg-orange-400 hover:scale-105 hover:text-white transition-all duration-300'>See how to manage users   <BsFillArrowRightCircleFill className='inline mx-2' /></button>
                            <div className='w-full'><img className='image-full mx-auto pt-10' src="/bannermini1.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;