import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import {FiMusic } from 'react-icons/fi'
const Slider = ({ children }) => {
  const [sliderData, setSliderData] = useState();
  const [currentSlider, setCurrentSlider] = useState(0);
  const [loading, setLoading] = useState(true);



  return (
    <>

      <section className='background h-screen z-30 '>
        {children}

        <div className='  md:flex justify-center items-center mt-[-100px]   gap-20 w-[85%] mx-auto items-center h-[100%]'>
          <div className='z-30'>
            <h1 className='text-3xl z-30 pt-56 md:pt-1 md:text-7xl font-light italic text-white appear-animation1  '>Unleash Your Passion For
           Music
            {/* <FiMusic className='text-white  inline ms-[-15px]' /> */}
             </h1>
          </div>

        </div>



      </section>
    </>
  );
}

export default Slider;
