import React from 'react';

const NextLevelCompoCard = ({ data }) => {
    return (
        <div className=''>
            <h2 className='text-3xl text-gray-700 font-semibold'> {data.name}</h2>
            <p className='text-gray-400 text-[20px] font-normal py-5 w-full'>{data.description}</p>


        </div>
    );
};

export default NextLevelCompoCard;