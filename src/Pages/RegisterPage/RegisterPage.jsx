import React, { useState, useContext } from 'react';

import LoginWithGoogle from '../../Component/LoginWithSocial/LoginWithGoogle';
import LoginWithGithub from '../../Component/LoginWithSocial/LoginWithGithub';
import LoginWithFacebook from '../../Component/LoginWithSocial/LoginWithFacebook';
import LoginWithApple from '../../Component/LoginWithSocial/LoginWithApple';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import Header from '../../Layout/Header/Header';
import { useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthContextProvider';
const RegisterPage = ({ setTitle }) => {
  const [message, setMessage] = useState("");
  const [pass, setPass] = useState(null);
  const [imguploadingmessage, setimguploadingmessage] = useState(null);
  const [progresssending, setProgresssending] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const { registerUser, user, logOut, loginUser, isLogged, setIsLogged, loading, userData, setUserData } = useContext(AuthContext);

  const changeInputPassword = (e) => {
    setMessage("")
  }
  useEffect(() => {
    setTitle("Registration")
  }, []);

  const auth = getAuth(app);
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.email.value
    let nid = e.target.nid.value
    let password = e.target.password.value
    let cfpassword = e.target.cfpassword.value

    if (password == "" || email == "") {
      setMessage("Password or email can't be empty")
      return;
    } else if (cfpassword != password) {
      setMessage("Password Doesn't Match")
      return;
    } else if (!/[A-Z]/.test(password)) {
      setMessage("Missing Capital letter")
      return;
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
      setMessage("Missing Special Character")
      return;
    }
    else if (password.length < 6) {
      setMessage("Password Must be more than 6")
      return;
    }
    let name = e.target.name.value;
  

    //for firebase..................................
    setUserData({
      name: name,
      email: email,
      photoURL: uploadedImageUrl,
    })


    //axios.......................................
    axios.post("/users", {
      name: name,
      email: email,
      photoURL: uploadedImageUrl,
      role: 'voter',
      nid : nid
    })
      .then(response => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          user.updateProfile({
            displayName: name,
            photoURL: photoURL,
          }).then((response) => {
            console.log(response)
          });
        })
        .catch(error => {
          console.error('Error creating user:', error);
        });
      })
      .catch(error => {
        console.error('Error creating user:', error);
        setMessage(error.response
.data.message)
      });
/////////////////////////////////////// Firebase ////////////////////////
    


    

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
      {/* <Header/> */}
      <section className="  md:w-full  mx-auto  min-h-[100vh]  flex justify-center  px-4 md:px-0 mt-12 px-20">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 text-2xl font-semibold items-center">
            <Link to="/login" className="py-2 text-gray-500">Login </Link>
            <Link to="/register" className="py-2  border-b-4 border-[#cb6206]  ">Register Now</Link>
          </div>



          <form onSubmit={handleSubmit} className="flex flex-col  gap-5 ">
            <input
              type="text"
              name="name"
              id=""
              placeholder="Enter Your Name"
              className="p-2 rounded-lg text-black border"
            />
            {/* <input
              type="text"
              name="image"
              id=""
              placeholder="Enter Your Photo Url"
              className="p-2 rounded-lg text-black border"
            /> */}

<div className='grid grid-cols-2'>
       <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Class Image</span>
        </label> 
         <input type="file"   onChange={imageUploadHandler}   name='img'   id='img'  className="file-input file-input-bordered w-full max-w-xs" />
       </div>
      <div className='mt-3 ms-5 rounded '>
      {
        uploadedImageUrl && <img className='rounded w-[100px]  shadow-lg hover:scale-[2.5] transition-all ease-in-out duration-500  ' src={uploadedImageUrl}/>
       }
      </div>
       </div>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
              className="p-2 rounded-lg text-black border" required
            />
            <input
              type="text"
              name="nid"
              id=""
              placeholder="Your NID"
              className="p-2 rounded-lg text-black border" required
            />
            <input onChange={changeInputPassword}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              className="p-2 rounded-lg text-black border" required
            />

            <input onChange={changeInputPassword}
              type="password"
              name="cfpassword"
              id="cfpassword"
              placeholder="Confirm Password"
              className="p-2 rounded-lg text-black border" required
            />
            <p className='text-red-700'>{message}</p>
            {/* <button type="submit" className="bg-gradient-to-r from-orange-500 text-white font-semibold py-3 rounded-2xl via-orange-500 to-orange-500 hover:scale-110 hover:bg-orange-500 hover:rounded-lg transition-all ease-in-out duration-700">Register</button> */}
            <div className='flex justify-center mt-4'>
      <button className="bg-gradient-to-r from-orange-500 text-white font-semibold py-3 px-32 rounded-2xl via-orange-500 to-orange-500 hover:scale-110 hover:rounded-lg transition-all ease-in-out duration-700" disabled={progresssending}>
        {progresssending && <div class="w-4 h-4 rounded-full animate-spin
                    border-2 border-solid border-white border-t-transparent"></div> }
      
                    <span>Register</span>
        </button>
       </div>
            {/* <a href="#">Forgot Password?</a> */}
            <a href="#">Already have an account ? <Link to="/login" className='text-orange-500'>Login</Link> </a>
          </form>
          <div className="grid grid-cols-2 gap-4 text-black text-[10px] md:text-sm">
            {/* <LoginWithFacebook/>
   <LoginWithApple/> */}
            <LoginWithGoogle className='invisible'/>

            <LoginWithGithub className=''/>
          </div>
        </div>
      </section>

    </>
  );
}

export default RegisterPage;




