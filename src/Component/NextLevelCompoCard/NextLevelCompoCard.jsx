import React from 'react';

const NextLevelCompoCard = ({ data }) => {
    return (
        <div className=''>
            <h2 className='text-2xl md:text-3xl text-gray-600  font-semibold'> {data.name}</h2>
            <p className='text-gray-400 md:text-[20px] font-normal py-5 w-full'>{data.description}</p>


        </div>
    );
};

export default NextLevelCompoCard;