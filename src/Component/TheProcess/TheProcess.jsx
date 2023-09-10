import React from 'react';
import faceDetection from '/public/animation_faceDetection.json'
import otp from '/public/animation_otp.json'
import vote from '/public/animation_vote.json'
import Lottie from 'lottie-react';
import {BsFillArrowRightCircleFill,BsFillArrowDownCircleFill } from 'react-icons/bs';

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
            description: 'Vote for your favorite candidate.'

        },
        {
            title: 'Verify with OTP',
            img: <Lottie
                animationData={otp}
                loop={true}
                autoplay={true}
                className='h-full'
            />,
            description: 'You will receive an email that contains an OTP '

        },
        {
            title: 'Verify with FaceDetection',
            img: <Lottie
                animationData={faceDetection}
                loop={true}
                autoplay={true}
                className='h-full'
            />,
            description: 'Vote for your favorite candidate.'

        }
    ]

    return (
        <div className='max-w-[1600px] md:px-12 px-6 mx-auto '>
            <h1 className='text-center text-4xl my-font md:text-6xl pb-20 pt-40'>The process</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
                {cardsData.map((data,index) =>

                    <div className='md:border-t-[3px] md:border-b-[3px] rounded-lg relative'>
                     
                      <div className='w-full h-[350px]'> {data.img}</div> 
                        <h1 className='text-3xl text-center pt-10 text-gray-600 font-semibold'>{index+1}. {data.title}</h1>  
                         <p className='text-lg md:text-xl text-gray-400 text-center pt-5 pb-10'> {data.description}</p>  
                         {index < 2 ? <><BsFillArrowRightCircleFill className='absolute md:block  hidden text-green-400 text-5xl -right-[60px] bottom-[50%]'/>
                         <BsFillArrowDownCircleFill className='absolute text-green-400 text-5xl right-[45%] md:hidden bottom-[-60px]'/>
                         </> :<></>}
                         

                    </div>

                )}
            </div>
        </div>
    );
};

export default TheProcess;