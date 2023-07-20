import React, { useEffect, useState, createContext, useContext } from 'react';
 
import axios from 'axios'; 
 
import {Link} from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthContextProvider';
import Spinner from '../../Component/Spinner/Spinner';
import InstructorCard from './InstructorCard';
const InstructorListPages = ({setTitle }) => {
    const  { registerUser, user, logOut, loginUser,isLogged,setIsLogged ,toastPush}  = useContext(AuthContext);
    
   const [loading, setLoading] = useState(true)
    const [renderData, setRenderData] = useState(null);
    const [UsersData, setUsersData] = useState(null)
    const [currentID, setCurrentID] = useState(null)
    const [feedbackdetails, setFeedbackdetails] = useState(null)
    const [feedbackclassid, setfeedbackclassid] = useState(null)
    const [progresssending, setprogresssending] = useState(false)
   
    useEffect(() => {
        if (loading && user) {
          setTitle("My Classes")
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



<div class="bg-white">
  <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-xl font-bold text-gray-900">Instructor List</h2>
    <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
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
 

        {/* <section className='mt-12 md:px-[8%]'>
   
        </section>

        <>
 
 

 
 
             {user ?
             <>
 
             <section className='flex flex-col items-center justify-center mt-8 space-y-8'>
  <div className="overflow-x-auto w-[75%]">
  
 
   <table className="table w-full"> 
     <thead>
       <tr>
       <th>Photo</th>
         <th>Name</th>
         <th>Email</th>
         <th>Role</th>
        
        </tr>
     </thead>
     <tbody>
     
 
 
     {loading ? <>
     <Spinner/>
     </> : <>
                         {renderData.map(e => {
 
 return <>
   <tr>
         
          
   <td>
           <div className="flex items-center space-x-3">
             <div className="avatar">
               <div className="mask mask-squircle w-12 h-12">
                 <img src={e.photoURL} alt="Avatar Tailwind CSS Component" />
               </div>
             </div>
            
           </div>
         </td>
        
         <td>{e.name}</td>
         <td>
          {e.email}
          </td>
          
          <td>
          {e.role}
          </td>


        
 
       </tr>
 </> 
                         })}
                     </>}
 
 
 
     
  
      
     </tbody> 
     <tfoot>
     <tr>


     <th>Photo</th>
     <th>Name</th>
         <th>Email</th>
         <th>Role</th>
     
       </tr>
     </tfoot>
     
   </table>
 </div>
 
             </section>
         </>:<>
 
         <div className='flex justify-center mt-12'>
             <h1 className='text-4xl font-semibold text-center'>No Content Available. User needs to Sign in</h1>
         </div>
         </>
             
              
            
             }
         </> */}
        </>
    );
}

export default InstructorListPages;
