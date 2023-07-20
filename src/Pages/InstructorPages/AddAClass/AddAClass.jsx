import axios from 'axios';
import React, { useContext, useState ,useEffect} from 'react'; 
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthContextProvider';
import { Fade } from 'react-awesome-reveal';
const AddAClass = ({setTitle}) => {
    const [loading, setLoading] = useState(true);
    const [classesData, setclassesData] = useState(null);
    const [message, setMessage] = useState(null);
    const [imguploadingmessage, setimguploadingmessage] = useState(null);
    const [progresssending, setProgresssending] = useState(false);
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
    
    const  { user, toastPush}  = useContext(AuthContext);
     useEffect(() => {
      setTitle("Add a Class")
        setclassesData({...classesData, instructorname:user && user.displayName, instructoremail:user && user.email})
        setLoading(false)
      }, []);
      const formSubmitHandler = async (e)=>{
       
         setProgresssending(true)
          e.preventDefault()
          let dataInsert = {...classesData,  image : uploadedImageUrl, status:'pending', feedback:null, enrolledstudents:0}
 axios.post("/addclass",dataInsert)
.then(response=>{ 
    setProgresssending(false)
    toastPush("Class Added Successfully")
})
.catch(err=>{
    console.log(err)
    setProgresssending(false)
    toastPush("Class Added Failed")
})
 
  
      }

      
  
      const inputChangeHandler =(e)=>{
          setclassesData({...classesData, [e.target.id]:e.target.value})
          setMessage(null)
      } 
      const imageUploadHandler = (e)=>{
        setimguploadingmessage("Wait... Image Is Uploading") 
        setProgresssending(true)
        const formData = new FormData();
        const countFile = e.target.files.length;
        console.log(countFile);
        
        for (let i = 0; i < countFile; i++) {
          formData.append("image", e.target.files[i]);
          
          axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload?expiration=0&key=89cd126a18f125ea9e7f8256dcb15acb',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
          })
            .then((response) => {
              console.log(response.data);
              setUploadedImageUrl(response.data.data.display_url)
              setimguploadingmessage(null) 
              setProgresssending(false)
            })
            .catch((error) => {
              setimguploadingmessage("Error") 
              setProgresssending(false)
            });
        }
        
      }
 

      return (
          <>
       <Fade className='w-full'>
          <section className='flex flex-col justify-center items-center space-y-5 mt-8 pb-12'>
 
{loading?<></>:



<form action="" className='w-[90%] md:w-[50%]' onSubmit={formSubmitHandler}>
 
 

  <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Class Name</span>
        </label>
        <input name='classname'   id='classname' value={classesData.classname}    onChange={inputChangeHandler} type="text" placeholder="Class Name" className="input input-bordered w-full " />
       </div>

       
       <div className='grid grid-cols-2'>
       <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Class Image</span>
        </label> 
         <input type="file"   onChange={imageUploadHandler}   name='img'   id='img'  className="file-input file-input-bordered w-full max-w-xs" />
       </div>
      <div className='mt-3'>
      {
        uploadedImageUrl && <img src={uploadedImageUrl}/>
       }
      </div>
       </div>
{imguploadingmessage && <div>
        <p className='text-red-700'>{imguploadingmessage}</p>
       </div>}
       
      
       <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Instructor Name</span>
        </label>
        <input name='instructorname'   id='instructorname' value={classesData.instructorname}  type="text" placeholder="instructorname" className="input input-bordered w-full " readonly/>
       </div>
       <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Instructor Email</span>
        </label>
        <input name='instructoremail'   id='instructoremail' value={classesData.instructoremail}   type="text" placeholder="Instructor Email" className="input input-bordered w-full " readonly/>
       </div>

       <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Available Seat</span>
        </label>
        <input name='availableseat'   id='availableseat' value={classesData.availableseat}  onChange={inputChangeHandler} type="number" placeholder="Available Seat"  className="input input-bordered w-full " />
       </div>

 
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input name='price'   id='price' value={classesData.price}   onChange={inputChangeHandler} type="text" placeholder="Price" className="input input-bordered w-full " />
       </div>
      
      
      <div className='flex justify-center mt-4'>
      <button className="btn btn-primary gap-2" disabled={progresssending}>
        {progresssending && <div class="w-4 h-4 rounded-full animate-spin
                    border-2 border-solid border-white border-t-transparent"></div> }
      
                    <span>Add a Class</span>
        </button>
       </div>
      </form>    }
      
          </section>
          </Fade>
        </>
    );
}

export default AddAClass;
