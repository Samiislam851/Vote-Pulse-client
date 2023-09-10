import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import NextLevelCompoCard from '../NextLevelCompoCard/NextLevelCompoCard';

const NextLevelCompo = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/nextLevelFeatures.json').then(res => res.json()).then(data => setData(data))
    }, []);
    console.log(data);
    return (
        <div className='max-w-[1600px] mx-auto pt-20 px-10 md:px-16 mb-20'>
            <div className=''>
                <h1 className='md:text-6xl text-4xl mb-14 font-semibold text-gray-600 text-center my-font'>Take Your Votes To The Next Level</h1>
                <div className='grid py-20  gap-10 grid-cols-1 md:grid-cols-3'>
                    {data.map(data => <NextLevelCompoCard data={data}></NextLevelCompoCard>)}
                </div>
                <div className='flex justify-center'>
                    <button className='text-orange-400 font-semibold text-xl border border-orange-400 border-[3px] px-10 py-5 rounded-lg
                    hover:bg-orange-400 hover:text-white transition-all duration-300
                    '>View all the Features</button>
                </div>
            </div>
        </div>
    );
};

export default NextLevelCompo;