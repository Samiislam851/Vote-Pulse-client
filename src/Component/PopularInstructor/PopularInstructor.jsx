import React, { useEffect, useState, createContext, useContext } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthContextProvider';
import Spinner from '../Spinner/Spinner';
import InstructorCard from '../../Pages/InstructorListPages/InstructorCard';






const PopularInstructor = () => {
  const { registerUser, user, logOut, loginUser, isLogged, setIsLogged, toastPush, dark } = useContext(AuthContext);

  const [loading, setLoading] = useState(true)
  const [renderData, setRenderData] = useState(null);
  const [UsersData, setUsersData] = useState(null)
  const [currentID, setCurrentID] = useState(null)
  const [feedbackdetails, setFeedbackdetails] = useState(null)
  const [feedbackclassid, setfeedbackclassid] = useState(null)
  const [progresssending, setprogresssending] = useState(false)
  const textLightTheme = 'text-gray-700';
  const textDarkTheme = 'text-gray-200';

  useEffect(() => {
    if (loading) {
      axios.get(`/instructor/all`)
        .then(response => {
          let data = response.data
          setUsersData(data)
          setRenderData(data)
          setLoading(false)

        })
    }
  }, []);



  return (
    <>
      <div className="bg-transparent">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-0">
          <p class={`text-6xl text-center   font-thin  mt-32  pb-20 ${dark?textDarkTheme:textLightTheme}`}>Popular Instructors </p>
          <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">  {loading ? <>
            <Spinner />
          </> : <>
            {renderData.map(e => {
              return <>
                <InstructorCard data={e} />
              </>
            })}
          </>}

          </div>
        </div>
      </div>
    </>
  );
}

export default PopularInstructor;
