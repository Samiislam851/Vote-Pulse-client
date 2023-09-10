import React from 'react';
import { useEffect, useState } from 'react';
import UseCase from '../UseCase/UseCase';
import { useSpring, animated } from 'react-spring';
const Usage = () => {
    const [useCase, setUseCase] = useState([]);
    useEffect(() => {
        fetch('/usage.json').then(res => res.json()).then(data => setUseCase(data))
    }, []);


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

    // Create a spring animation based on scrollY
    const springProps = useSpring({
        from: { opacity: 0, transform: 'translateY(1100px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { tension: 170, friction: 80 },
        delay: 100,
        reverse: scrollY < 100, // Change this value to trigger the animation at a different scroll position
    });
    // Create a spring animation based on scrollY
    const springProps2 = useSpring({
        from: { opacity: 0, transform: 'translateY(1100px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { tension: 130, friction: 80 },
        delay: 100,
        reverse: scrollY < 100, // Change this value to trigger the animation at a different scroll position
    });


    return (
        <div className='max-w-[1600px] mx-auto md:px-12 px-5'>

            <animated.div style={springProps} className="animated-element">
                <div className='md:text-6xl text-4xl font-semibold text-gray-600 text-center md:my-10 mb-5 my-font'>Where Can You Use VotePulse?</div>
            </animated.div>

            <animated.div style={springProps2} className="animated-element"> 
            <p className='text-gray-400 text-center mb-16 w-[80%] mx-auto md:text-xl text-lg'>VotePulse is the trusted choice for world-class organizations with industry-specific voting needs. Our platform is tailored to meet the unique voting requirements of top-tier entities across various sectors, providing efficiency, security, and valuable insights for informed decision-making. Join the ranks of organizations that have chosen VotePulse to elevate their voting processes.</p>
            </animated.div>
            <div className='grid grid-cols-1 md:grid-cols-3 w-full mx-auto  gap-5'>

                {useCase.map(usage => <UseCase usage={usage}></UseCase>)}
            </div>
        </div>
    );
};

export default Usage;