import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const ScreenShots = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        console.log(scrollY);
    }, [scrollY]);

    // Create a spring animation based on scrollY
    const springProps = useSpring({
        from: { opacity: 0, transform: 'translateX(-1100px)' },
        to: { opacity: 1, transform: 'translateX(0px)' },
        config: { tension: 200, friction: 80 },
        delay: 100,
        reverse: scrollY < 3400, // Change this value to trigger the animation at a different scroll position
    });
    const springProps2 = useSpring({
        from: { opacity: 0, transform: 'translateY(1100px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { tension: 200, friction: 80 },
        delay: 100,
        reverse: scrollY < 3400, // Change this value to trigger the animation at a different scroll position
    });
    const springProps3 = useSpring({
        from: { opacity: 0, transform: 'translateY(1100px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { tension: 200, friction: 80 },
        delay: 100,
        reverse: scrollY < 3700, // Change this value to trigger the animation at a different scroll position
    });
    const springProps4 = useSpring({
        from: { opacity: 0, transform: 'translateX(-1100px)' },
        to: { opacity: 1, transform: 'translateX(0px)' },
        config: { tension: 200, friction: 80 },
        delay: 100,
        reverse: scrollY < 3700, // Change this value to trigger the animation at a different scroll position
    });

    return (
        <div className='max-w-[1600px] md:px-12 px-8 mx-auto'>
            {/*Create Election  */}
            <div className='md:flex md:flex-row justify-center items-center gap-20 py-10 md:pb-40'>
                <div className='basis-[50%]  ' >
                    <animated.div
                        style={springProps} className={'animated-element'}
                    >
                        <img src='/AddElection.png' className='w-full md:scale-110 shadow-xl ' alt="" />

                    </animated.div>
                </div>
                <div className='basis-[50%]'>
                    <animated.div style={springProps2} className={'animated-element'} >
                        <h1 className='md:text-6xl text-3xl text-center md:text-start  font-bold text-gray-600 py-5 my-font'> Create an online election in a matter of seconds</h1>
                        <p className='md:text-xl text-gray-400 pb-5 text-center md:text-start md:ps-3'>Whether it's a quick poll with friends or the solution to an eternal discussion in your forum, VotePulse helps you find the answer quickly and easily. <br />

                            Are you on social media and have you ever wanted to know what your followers really think? Here you can create a free poll in seconds, without any signup or registration. Of course, for complex features and to manage your polls, we also offer a login process if you want.</p>
                        <Link to='#' className='text-orange-400 font-semibold text-xl text-center md:text-start md:ps-3'>Learn more about how to create your first poll →</Link>
                    </animated.div>
                </div>
            </div>
            <div className='md:flex md:flex-row-reverse justify-center items-center gap-20 pb-20'>
                <div className='basis-[50%]   ' >
                    <animated.div style={springProps3}>
                        <img src='/ManageElections.png' className='w-full md:scale-110 shadow-xl' alt="" />
                    </animated.div>
                </div>
                <div className='basis-[50%]'>
                    <animated.div style={springProps4}>
                        <h1 className='md:text-6xl text-3xl text-center md:text-start  font-bold text-gray-600 py-5 my-font'>Managing elections just got easier..!</h1>
                        <p className='md:text-xl ps-3 text-center md:text-start text-gray-400 pb-5'>Whether you're overseeing a local election or tackling the responsibilities of a large-scale political campaign, VotePulse is here to streamline the entire election management process.

                            Are you responsible for organizing an upcoming election and looking for a reliable and efficient solution? Look no further! VotePulse empowers you to manage elections with ease and precision.</p>
                        <Link to='#' className='text-orange-400 text-center md:text-start font-semibold text-xl md:ps-3'>Learn more about how to create your first poll →</Link>
                    </animated.div>

                </div>
            </div>


            {/* manage election */}
        </div>
    );
};

export default ScreenShots;