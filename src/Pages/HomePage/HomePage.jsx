import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import PopularClassesCard from '../../Component/PopularClassesCard/PopularClassesCard';
import ClassesCard from '../../Component/ClassesCard/ClassesCard';
import PopularClassesComponent from '../../Component/HomePageComponents/PopularClassesComponent/PopularClassesComponent';
import PopularInstructor from '../../Component/PopularInstructor/PopularInstructor';
import Contact from '../../Component/Contact/Contact';

import Banner from '../../Component/Banner/Banner';
import UpdatedBanner from '../../Component/UpdatedBanner/UpdatedBanner';
import Usage from '../../Component/Usage/Usage';
import NextLevelCompo from '../../Component/NextLevelCompo/NextLevelCompo';
import ScreenShots from '../../Component/ScreenShots/ScreenShots';
import FaqAccordion from '../../Component/FaqAccordion/FaqAccordion';
import TheProcess from '../../Component/TheProcess/TheProcess';






const HomePage = ({ setTitle }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      setTitle("Homepage")
      setLoading(false)
    }


  }, []);



  return (


    <>
      <UpdatedBanner />
      <Usage/>
      <Banner></Banner>
      <NextLevelCompo/>
      <ScreenShots/>
      <TheProcess/>
      <FaqAccordion/>
     
     <Contact></Contact> 
    </>



  );
}

export default HomePage;
