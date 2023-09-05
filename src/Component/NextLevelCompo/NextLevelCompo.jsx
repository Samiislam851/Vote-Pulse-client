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
        <div className='max-w-[1600px] mx-auto px-16'>
            <div>
                <h1 className='md:text-5xl font-semibold text-gray-700 text-center'>Take Your Votes To The Next Level</h1>
                <div className='grid py-20  gap-10 grid-cols-3'>
                    {data.map(data => <NextLevelCompoCard data={data}></NextLevelCompoCard>)}
                </div>
            </div>
        </div>
    );
};

export default NextLevelCompo;