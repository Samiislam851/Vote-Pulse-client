import React, { useEffect, useState, createContext, useContext } from 'react';
 
import axios from 'axios'; 
 
import {Link} from 'react-router-dom'
import { AuthContext } from '../../../Provider/AuthContextProvider';
import Spinner from '../../../Component/Spinner/Spinner';
 
const MySelectedClasses = ({setTitle }) => {

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
            axios.get(`/selectedclass/${user.email}`)
                .then(response => {
                    let data = response.data
                    setmyClassesData(data)
                    setRenderData(data)
                    setLoading(false)

                })
        }
    }, []);
    
//  const payButtonHandler = (e)=>{
// if(user){
//   let data ={
//     classid:e,
//     email:user.email,
//     enrolled:false
//   }
//   axios.post("/select/class/",data )
//   .then(response=>{
//     console.log(response.data)
//     toastPush("You've Selected Class")
//   })
// }
//  }
 

 const deleteClassHandler = (id)=>{
    
    axios.delete(`/selectedclass/delete/${id}`)
    .then((response)=>{
        toastPush("Deleted Data Success")
console.log(response.data)
let data = renderData.filter(e=>e._id!=id)
    setRenderData(data)
   
    })
    .catch(err=>{
        toastPush("Deleted Failed")
    })
 }
   
     const isAdmin = false;
     const isInstructor = false;
    return (
     
 
 
 
 
 
 
         
             <>
 
             <section className='flex flex-col items-center justify-center mt-8 space-y-8'>
  <div className="overflow-x-auto ">
  
 
   <table className="table w-full"> 
     <thead>
       <tr>
         <th>Class/Image</th>
         <th>Instructor</th>
         <th>Price</th>
         <th>Available Seat</th>
         <th>Total Enrolled</th>
         <th>Delete</th>
         <th>Pay</th>
      
       </tr>
     </thead>
     <tbody>
     
 
 
     {loading ? <>
     <Spinner/>
     </> : <>
                         {renderData.map(e => {
 
 return <>
   <tr className={e.availableseat==0 && `bg-red-500`}>
         
         <td>
           <div className="flex items-center space-x-3">
             <div className="avatar">
               <div className="mask mask-squircle w-12 h-12">
                 <img src={e.result[0].image} alt="Avatar Tailwind CSS Component" />
               </div>
             </div>
             <div>
               <div className="font-bold">{e.result[0].classname}</div>
           
             </div>
           </div>
         </td>
         <td>{e.result[0].instructorname}</td>
         <td>{e.result[0].price}</td>
         <td>
          {e.result[0].availableseat}
          </td>
          <td>
          {e.result[0].enrolledstudents}
          </td>
          <td >
            {/* <span className={`btn border-none ${e.status === 'pending' ? 'btn-warning' : (e.status === 'approved' ? 'btn-success' : 'bg-red-600')} btn-xs`}>{e.status}</span> */}
            <button onClick={()=>deleteClassHandler(e._id)} className='btn btn-warning btn-xs' >Delete</button>
          
          </td>
          <td >
             <Link to={`/student/class/payment/${e._id}`} className='btn btn-primary btn-xs'>Pay Now</Link>
          
          </td>
          
         
       </tr>
 </> 
                         })}
                     </>}
 
 
 
     
  
      
     </tbody>
     {/* foot */}
     <tfoot>
     <tr>
     <th>Class/Image</th>
         <th>Instructor</th>
         <th>Price</th>
         <th>Available Seat</th>
         <th>Total Enrolled</th>
         <th>Delete</th>
         <th>Pay</th>
       
       </tr>
     </tfoot>
     
   </table>
 </div>
 
             </section>
         </> 
             
              
            
        
    );
}
export default MySelectedClasses;
