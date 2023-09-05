import React from 'react';
import Anime from 'react-anime';

function MovingComponent({ className }) {
    const animationProps = {
        translateY: [0,-10, 0],
    translateX: [0, 0],
    duration: 5000, // Increase the animation duration to 1 second
    loop: true,
    easing: 'easeOutQuad',
    };

    return (
        <div className={`absolute ${className} hidden md:block`}
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
            <Anime {...animationProps}>
                <div
                    className='backdrop-blur-sm bg-gray-100 bg-opacity-60 flex gap-10 justify-center items-center  rounded-full w-[500px] min-h-[150px] text-center'
                >
                    <div className='border-e-4 pe-8 border-gray-600 ' > 
                        <div className='text-4xl font-semibold  text-gray-800'>35,657,000</div>
                        
                        <div className='text-xl text-gray-600'>Votes Casted</div>
                    </div>
                    <div>
                        <div className='text-4xl font-semibold text-gray-800'>313,553</div>
                        <div lassName='text-xl text-gray-600'>Elections Held</div>
                    </div>
                </div>
            </Anime>
        </div>
    );
}

export default MovingComponent;
