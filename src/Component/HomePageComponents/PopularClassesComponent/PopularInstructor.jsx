import React, { useEffect, useState, createContext, useContext } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthContextProvider';
import InstructorCard from '../../../Pages/InstructorListPages/InstructorCard';
 
 

const PopularInstructor = () => {
    const  { registerUser, user, logOut, loginUser,isLogged,setIsLogged ,toastPush}  = useContext(AuthContext);
    
   const [loading, setLoading] = useState(true)
    const [renderData, setRenderData] = useState(null);
    const [UsersData, setUsersData] = useState(null)
    const [currentID, setCurrentID] = useState(null)
    const [feedbackdetails, setFeedbackdetails] = useState(null)
    const [feedbackclassid, setfeedbackclassid] = useState(null)
    const [progresssending, setprogresssending] = useState(false)
   
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
             <div className="bg-white">
    <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
Instructor      <div className="-mx-px grid grid-cols-2   border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
      {loading ? <>
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
