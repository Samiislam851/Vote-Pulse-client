import React from 'react';
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const UseCase = ({ usage }) => {
    const [scrollY, setScrollY] = useState(0);

    // Get the scroll position and update scrollY state
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
const [randomNum, setRandomNum] = useState(5);
useEffect(() => {
 setRandomNum((Math.floor(Math.random() * (7 - 2 + 1))+2 )*10)

}, []);
    // Create a spring animation based on scrollY
    const springProps = useSpring({
        from: { opacity: 0, transform: 'translateY(1100px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { tension: 100, friction: 80 },
        delay: 100,
        reverse: scrollY < 100, // Change this value to trigger the animation at a different scroll position
    });


    return (
        <div >
            <animated.div style={springProps} className="animated-element">
                <div className='border-4 text-[#FF9021] border-[#FF9021] text-xl py-4 px-7 rounded-lg md:hover:scale-105 transition-all duration-300 ease-in-out text-center  md:hover:bg-[#ff9021] md:hover:text-white'>
                    {usage.name}
                </div>
            </animated.div>

        </div>
    );
};

export default UseCase;