import React, { useEffect, useState, createContext, useContext } from 'react';
 
import axios from 'axios'; 
import { Fade } from "react-awesome-reveal";
import {Link} from 'react-router-dom'
import Spinner from '../../../Component/Spinner/Spinner';
import { AuthContext } from '../../../Provider/AuthContextProvider';

const MyClassInstructor = ({setTitle}) => {

    const  { registerUser, user, logOut, loginUser,isLogged,setIsLogged }  = useContext(AuthContext);
    const  { toastPush}  = useContext(AuthContext);

            
    const [loading, setLoading] = useState(true)
    const [renderData, setRenderData] = useState(null);
    const [myClassesData, setmyClassesData] = useState(null)
    const [currentID, setCurrentID] = useState(null)
    const [feedbackDetails, setfeedbackDetails] = useState(null)
  
    
    useEffect(() => {
        if (loading && user) {
          setTitle("My Classes")
            axios.get(`/classes/find/${user.email}`)
                .then(response => {
                    let data = response.data
                    setmyClassesData(data)
                    setRenderData(data)
                    setLoading(false)

                })
        }
    }, []);
    
    const deleteButtonHandler =(e)=>{
        axios.delete("/delete/"+currentID )
        .then(response=>{
            let data = renderData.filter(e=>e._id !=currentID)
            setCurrentID(null)
            setRenderData(data)
            toastPush("Deleted Successfully")
        })
        .catch(err=>{
            console.log(err)
        })
    }

   
     
 
    return (
        <>
        <section className='mt-12 md:px-[1%]'>
    
        </section>

        <>
 
 
 
     <input type="checkbox" id="my-modal" className="modal-toggle" />
 <div className="modal">
   <div className="modal-box">
     <h3 className="font-bold text-lg">Read Feedback</h3>
     <p className="py-4">{feedbackDetails}</p>
     <div className="modal-action">
    
       <label htmlFor="my-modal" className="btn">close</label>
     </div>
   </div>
 </div>
  
 
 
             {user ?
             <>
 
 <Fade>     <section className='flex flex-col items-center justify-center space-y-8'>
  <div className="overflow-x-auto">
  
 
   <table className="table w-full"> 
     <thead>
       <tr>
         <th>Name</th>
         <th>Price</th>
         <th>Available Seat</th>
         <th>Total Enrolled</th>
         <th>Status</th>
         <th>Update</th>
         <th>Feedback</th>
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
                 <img src={e.image} alt="Avatar Tailwind CSS Component" />
               </div>
             </div>
             <div>
               <div className="font-bold">{e.instructorname}</div>
               <div className="text-sm opacity-50">{e.instructoremail} </div>
             </div>
           </div>
         </td>
        
         <td>{e.price}</td>
         <td>
          {e.availableseat}
          </td>
          <td>
          {e.enrolledstudents}
          </td>
          <td >
            <span className={`btn border-none ${e.status === 'pending' ? 'btn-warning' : (e.status === 'approved' ? 'btn-success' : 'bg-red-600')} btn-xs`}>{e.status}</span>
          
          </td>
         <th>
           <Link to={`/instructor/updateclass/${e._id}`} className="btn btn-info btn-xs">Update</Link>
         </th>
         <th>
           {
            e.feedback && <label onClick={()=>{ 
                setfeedbackDetails(e.feedback)
            }} htmlFor="my-modal"  className="btn btn-danger btn-xs">Feedback</label>
           }
         </th>
       </tr>
 </> 
                         })}
                     </>}
 
 
 
     
  
      
     </tbody>
     {/* foot */}
     <tfoot>
     <tr>
     <th>Name</th>
         <th>Price</th>
         <th>Available Seat</th>
         <th>Total Enrolled</th>
         <th>Status</th>
         <th>Update</th>
         <th>Feedback</th>
       </tr>
     </tfoot>
     
   </table>
 </div>
 
             </section></Fade> 
         </>:<>
 
         <div className='flex justify-center mt-12'>
             <h1 className='text-4xl font-semibold text-center'>No Content Available. User needs to Sign in</h1>
         </div>
         </>
             
              
            
             }
         </>
        </>
    );
}

export default MyClassInstructor;






 











 
