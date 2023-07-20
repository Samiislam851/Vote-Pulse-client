import React, { useEffect, useState, createContext, useContext } from 'react';

import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthContextProvider';
import Spinner from '../../Component/Spinner/Spinner';
import ClassCard from './ClassCard';
 



const ClassesListPage = ({ setTitle }) => {

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


  useEffect(() => {
    if (loading) {
      setTitle("My Classes")
      axios.get(`/classes/all`)
        .then(response => {
          let data = response.data
          setmyClassesData(data)
          setRenderData(data)
          setLoading(false)

        })



    }
  }, []);

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
    }else{
      toastPush("Login to select Class")
      navigate("/login")
    }
  }


  return (








    <>

<div class="bg-transparent">
  <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-xl font-bold text-gray-900">Classes List</h2>
    <div class="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-2">
    {loading ? <>
                <Spinner />
              </> : <>
                {renderData.map(e => {
let disablebtn = (isAdmin == true || isInstructor == true || e.availableseat == 0)? true : false
                  return <>
              <ClassCard selectClassHandler={selectClassHandler} data={e} disablebtn={disablebtn}/>
                  </>
                })}
              </>}
    
   
      

     
    </div>
  </div>
</div>


      {/* <section className='flex flex-col items-center justify-center mt-8 space-y-8'>
        <div className="overflow-x-auto w-[75%]">


          <table className="table w-full">
            <thead>
              <tr>
                <th>Class/Image</th>
                <th>Instructor</th>
                <th>Price</th>
                <th>Available Seat</th>
                <th>Total Enrolled</th>
                <th>Status</th>

              </tr>
            </thead>
            <tbody>



              {loading ? <>
                <Spinner />
              </> : <>
                {renderData.map(e => {

                  return <>
                    <tr className={e.availableseat == 0 && `bg-red-500`}>

                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={e.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{e.classname}</div>

                          </div>
                        </div>
                      </td>
                      <td>{e.instructorname}</td>
                      <td>{e.price}</td>
                      <td>
                        {e.availableseat}
                      </td>
                      <td>
                        {e.enrolledstudents}
                      </td>
                      <td >
                          <button onClick={() => selectClassHandler(e._id)} className='btn btn-primary btn-xs' disabled={(isAdmin == true || isInstructor == true || e.availableseat == 0) ? true : false}>Select</button>

                      </td>


                    </tr>
                  </>
                })}
              </>}






            </tbody>
        
            <tfoot>
              <tr>
                <th>Class/Image</th>
                <th>Instructor</th>
                <th>Price</th>
                <th>Available Seat</th>
                <th>Total Enrolled</th>
                <th>Status</th>

              </tr>
            </tfoot>

          </table>
        </div>

      </section> */}
    </>




  );
}

export default ClassesListPage;
