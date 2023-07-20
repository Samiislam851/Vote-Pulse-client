import React, { useEffect, useState, createContext, useContext } from 'react';
 
import axios from 'axios'; 
 
import {Link} from 'react-router-dom'
import Spinner from '../../../Component/Spinner/Spinner';
import { AuthContext } from '../../../Provider/AuthContextProvider';

const ManageClasses = ({setTitle}) => {
    const  { registerUser, user, logOut, loginUser,isLogged,setIsLogged ,toastPush}  = useContext(AuthContext);
    

            
    const [loading, setLoading] = useState(true)
    const [renderData, setRenderData] = useState(null);
    const [myClassesData, setmyClassesData] = useState(null)
    const [currentID, setCurrentID] = useState(null)
    const [feedbackdetails, setFeedbackdetails] = useState(null)
    const [feedbackclassid, setfeedbackclassid] = useState(null)
    const [progresssending, setprogresssending] = useState(false)
   
    useEffect(() => {
        if (loading && user) {
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

   
     const approveBtnHanlder = (e)=>{
        const updatedData = renderData.map(obj => {
            if (obj._id === e) {
              return { ...obj, status: "approved" };
            }
            return obj;
          });
          console.log(updatedData)
          setRenderData(updatedData)

          axios.put(`/class/approved/${e}`).then(response=>{
            console.log(response.data)
            toastPush("Class Approved")
          })
     }
     const denyBtnHanlder = (e)=>{
        const updatedData = renderData.map(obj => {
            if (obj._id === e) {
              return { ...obj, status: "denied" };
            }
            return obj;
          });
          console.log(updatedData)
          setRenderData(updatedData)
          axios.put(`/class/denied/${e}`).then(response=>{
            console.log(response.data)
            toastPush("Class denied")
          })
     }
     const feedbackBtnHanlder = (e)=>{
        setfeedbackclassid(e);
    
     }
 const sybmitFeedbackHandle = (e)=>{
    setprogresssending(true)
    setfeedbackclassid(null);
    setFeedbackdetails(null);
    axios.put(`/class/feedback/${feedbackclassid}`,{
        feedback:feedbackdetails
    })
    .then(response=>{
        console.log(response.data)
        setprogresssending(false)
        toastPush("Feedback Submit Success")
    })
    .catch(err=>  toastPush("Feedback Submit Error"))
 }
    return (
        <>



 
<input type="checkbox" id="feedbackbtnmodal" class="modal-toggle"/>
<label for="feedbackbtnmodal" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    <h3 class="text-lg font-bold">Write a feedback</h3>
    <textarea onChange={(e)=>setFeedbackdetails(e.target.value)} placeholder="Write a feedback" className="textarea textarea-bordered textarea-lg w-full mt-8" ></textarea>
    <div>
     
   <button className="btn btn-primary mt-5"  onClick={sybmitFeedbackHandle} disabled={progresssending}>
        {progresssending && <div class="w-4 h-4 rounded-full animate-spin
                    border-2 border-solid border-white border-t-transparent"></div> }
      
                    <span>Submit Feedback</span>
        </button>
    </div>
    <div className="modal-action">
      <label htmlFor="feedbackbtnmodal" className="btn">Close!</label>

     

    </div>
  </label>
</label>

        <section className='mt-12'>
        {/* <div className="tabs">
 
        <Link to="/instructor" className="tab tab-lg tab-lifted tab-active ">My Classes</Link> 
 <Link to="/instructor/addclass" className="tab tab-lg tab-lifted" >Add Class</Link> 
</div> */}
        </section>

        <>
 
 
 {
     currentID && <>
     <input type="checkbox" id="my-modal" className="modal-toggle" />
 <div className="modal">
   <div className="modal-box">
     <h3 className="font-bold text-lg">Warning</h3>
     <p className="py-4">Are You Ready to delete this?</p>
     <div className="modal-action">
     <button onClick={deleteButtonHandler} className="btn btn-warning">Yes</button>
       <label htmlFor="my-modal" className="btn">No</label>
     </div>
   </div>
 </div>
     </>
 }
 
 
             {user ?
             <>
 
             <section className='flex flex-col items-center justify-center mt-8 space-y-8'>
  <div className="overflow-x-auto  ">
  
 
   <table className="table w-full"> 
     <thead>
       <tr>
         <th>Name</th>
         <th>Price</th>
         <th>Available Seat</th>
         <th>Total Enrolled</th>
         <th>Status</th>
        
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
          <span className={`btn border-none ${e.status === 'pending' ? 'btn-warning' : (e.status === 'approved' ? 'btn-success' : 'bg-red-600')} btn-xs`}>
  {e.status}
</span>

          </td>
   
         <td>
<div className="btn-group">
  <button onClick={()=>approveBtnHanlder(e._id)} className="btn  btn-xs btn-success" disabled={e.status=='pending'?false:true}>Approve</button>
  <button onClick={()=>denyBtnHanlder(e._id)} className="btn  btn-xs border-none bg-red-600 border-none"  disabled={e.status=='pending'?false:true}>Deny</button>
  {/* <button for="feedbackbtnmodal" onClick={()=>feedbackBtnHanlder(e._id)} className="btn  btn-xs bg-blue-600 border-none">Feedback</button> */}
  <label for="feedbackbtnmodal" onClick={()=>feedbackBtnHanlder(e._id)}  class="btn  btn-xs bg-blue-600 border-none">Feedback</label>
</div>
</td>
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
         <th>Feedback</th>
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
         </>
        </>
    );
}
export default ManageClasses;
