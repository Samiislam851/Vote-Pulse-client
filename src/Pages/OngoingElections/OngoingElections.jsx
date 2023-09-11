import React from 'react';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthContextProvider';
import Spinner from '../../Component/Spinner/Spinner';
import OngoingElectionsCard from './OngoingElectionsCard';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import LoginPage from '../LoginPage/LoginPage';
import ErrorPage from '../ErrorPage/ErrorPage';

const OngoingElections = ({ setTitle }) => {

    // const { isLoading, error, data } = useQuery({
    //   queryKey: ['repoData'],
    //   queryFn:async () =>
    //     {
    //       const response =await  axios.get('/classes/all');
    //         return response.data;
    //     },
    // })
    const navigate = useNavigate()
    const { registerUser, user, logOut, loginUser, isLogged, setIsLogged, isAdmin, isInstructor } = useContext(AuthContext);


    const { toastPush } = useContext(AuthContext);


    const [loading, setLoading] = useState(true)
    const [renderData, setRenderData] = useState(null);
    const [myClassesData, setmyClassesData] = useState(null)
    const [currentID, setCurrentID] = useState(null)
    const [feedbackDetails, setfeedbackDetails] = useState(null)

 

    const selectClassHandler = (e) => {
        if (user) {
            let data = {
                classid: e,
                email: user.email,
                enrolled: false
            }
            axios.post("/select/class/", data)
                .then(response => {
                    console.log(response.data)
                    if (response.data.message == 'exist') {
                        toastPush("User Already Select this class")
                    } else {
                        toastPush("You've Selected Class")
                    }

                })
        } else {
            toastPush("Login to select Class")
            navigate("/login")
        }
    }


    const [elections, setElections] = useState([]);
    useEffect(() => {
     setTitle('Ongoing Elections')
        if (loading) {
                    axios.get(`/elections`)
                .then(response => {
                    let data = response.data
                    console.log(data)
                    setElections(data)
                    setLoading(false)
                })
            }
    }, []);
   
if(!user){
    return   <>

    <div class="bg-transparent">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 min-">
            <h2 class="text-6xl font-sans font-semibold text-gray-600 my-font text-center">Ongoing Elections</h2>
            <div class="mt-8 ">
                {loading ? <>
                    <Spinner />
                </> : <>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                                {elections && elections.map(election => <OngoingElectionsCard election={election}></OngoingElectionsCard>)}
                            </div>
                </>}



              

            </div>
        </div>
     
    </div>



</>
}
else{
    return (

        <>

            <div class="bg-transparent">
                <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 min-">
                    <h2 class="text-6xl font-sans font-semibold text-gray-600 my-font text-center">Ongoing Elections</h2>
                    <div class="mt-8 ">
                        {loading ? <>
                            <Spinner />
                        </> : <>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                                        {elections && elections.map(election => <OngoingElectionsCard election={election}></OngoingElectionsCard>)}
                                    </div>
                        </>}



                      

                    </div>
                </div>
             
            </div>



        </>
            );}
};

export default OngoingElections;