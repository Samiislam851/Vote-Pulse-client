import React from 'react';
import faceDetection from '/public/animation_faceDetection.json'
import otp from '/public/animation_otp.json'
import vote from '/public/animation_vote.json'
import Lottie from 'lottie-react';
import { BsFillArrowRightCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs';
import { useSpring, animated } from 'react-spring';
import { useEffect } from 'react';
import { useState } from 'react';

const TheProcess = () => {
    const cardsData = [
        {
            title: 'Give your vote',
            img: <Lottie
                animationData={vote}
                loop={true}
                autoplay={true}
                className='h-full'
            />,
            description: 'First, give your vote to your favorite candidate'

        },
        {
            title: 'Verify with OTP',
            img: <Lottie
                animationData={otp}
                loop={true}
                autoplay={true}
                className='h-full'
            />,
            description: ' Then, ensure its integrity with a received OTP via email. '

        },
        {
            title: 'Verify with FaceDetection',
            img: <Lottie
                animationData={faceDetection}
                loop={true}
                autoplay={true}
                className='h-full'
            />,
            description: ' Finally, verify your identity with Face Detection technology.'

        }
    ]

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
        reverse: scrollY < 4500, // Change this value to trigger the animation at a different scroll position
    });
    // Create a spring animation based on scrollY
    const springProps2 = useSpring({
        from: { opacity: 0, transform: 'translateY(1100px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { tension: 130, friction: 80 },
        delay: 100,
        reverse: scrollY < 4500, // Change this value to trigger the animation at a different scroll position
    });
    const springProps3 = useSpring({
        from: { opacity: 0, transform: 'translateY(1100px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { tension: 130, friction: 80 },
        delay: 1000,
        reverse: scrollY < 4500, // Change this value to trigger the animation at a different scroll position
    });


    
    return (
        <animated.div style={springProps} className="animated-element">
        <div className='bg-gray-100 pb-32 mt-20'>
            <div className='max-w-[1600px] md:px-12 px-6 mx-auto '>

              
                    <h1 className='text-center text-4xl my-font md:text-6xl pb-10 text-gray-600 font-semibold pt-20'>The Secure process</h1>
              
                <animated.div style={springProps2} className="animated-element">
                    <p className='text-gray-500 pb-16 text-lg md:text-xl md:w-[70%] mx-auto text-center'>Our voting process is designed for simplicity and security. We prioritize privacy and security, ensuring your voice is heard in a trustworthy and accessible way. Thank you for participating in the democratic process!</p>
                </animated.div>
                <animated.div style={springProps3} className="animated-element">
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-20'>
                        {cardsData.map((data, index) =>

                            <div className='md:border-t-[3px] md:border-b-[3px] border-orange-300 rounded-lg relative bg-white'>

                                <div className='w-full h-[350px]'> {data.img}</div>
                                <h1 className='text-3xl text-center pt-10 text-gray-600 font-semibold'>{index + 1}. {data.title}</h1>
                                <p className='text-lg md:text-xl text-gray-400 text-center pt-5 pb-10'> {data.description}</p>
                                {index < 2 ? <><BsFillArrowRightCircleFill className='absolute md:block  hidden text-orange-400 text-5xl -right-[60px] bottom-[50%]' />
                                    <BsFillArrowDownCircleFill className='absolute text-green-400 text-5xl right-[45%] md:hidden bottom-[-60px]' />
                                </> : <></>}


                            </div>

                        )}
                    </div>
                </animated.div>
            </div>
        </div>
        </animated.div>
    );
};

export default TheProcess;