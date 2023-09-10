import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '/public/animation_faq.json'; // Ensure the correct path to your animation data

const FaqAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Collapse the open accordion if clicked again
        } else {
            setActiveIndex(index); // Expand the clicked accordion
        }
    };

    const faqData = [
        {
            question: "What is VotePulse",
            answer: "VotePulse is an online voting platform designed to streamline the election and voting process. It offers a secure and efficient way for organizations to conduct elections, polls, and surveys."
        },
        {
            question: "How can I start a free election on VotePulse?",
            answer: "Starting a free election on VotePulse is easy. Simply sign in as an admin, use our user-friendly interface to create your election, and customize it according to your needs. You can then invite voters and start the voting process."
        },
        {
            question: "Can I get assistance in managing my election?",
            answer: "Yes, you can! Our voting experts are available to provide instructions and suggestions throughout the election process. They can guide you in setting up and managing your election effectively."
        },
        {
            question: "What are the key features of VotePulse?",
            answer: "VotePulse offers a range of features, including real-time results, high-integrity voting, flexible ballots, automated setup, and security with 256-bit encryption. You can also notify voters through various channels and tabulate results instantly."
        },
        {
            question: "How can I manage users as an admin?",
            answer: "Yes, you can! Our voting experts are available to provide instructions and suggestions throughout the election process. They can guide you in setting up and managing your election effectively."
        },
    ];

    return (
        <div className='bg-gradient-to-r from-white py-28 to-white p-12'>

            <div className='max-w-[1600px] md:px-12 mx-auto'>
                <h1 className='text-center md:text-7xl text-4xl pb-10 text-semibold my-font text-gray-600 h-fit'>
                    Frequently Asked Questions
                </h1>
                <div className='mx-auto flex flex-col  justify-center items-center md:flex-row-reverse'>

                    <Lottie
                        animationData={animationData}
                        loop={true}
                        autoplay={true}
                        className='md:basis-[50%]'
                    />
                    <div className='md:basis-[50%]'>
                        {faqData.map((item, index) => (
                            <div key={index} className={`collapse collapse-arrow bg-white rounded-b-none border-b-2 ${activeIndex === index ? 'active' : ''}`}>
                                <input type="radio" name="my-accordion-3" checked={activeIndex === index} onChange={() => handleAccordionClick(index)} />
                                <div className="collapse-title md:text-2xl text-xl py-5 md:px-10 font-semibold">
                                    {item.question}
                                </div>
                                <div className="collapse-content">
                                    <p className='text-gray-500 md:ps-6 text-lg'>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqAccordion;
