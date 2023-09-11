import React, { useState } from 'react';
 

import LoginWithGoogle from '../../Component/LoginWithSocial/LoginWithGoogle';
import LoginWithGithub from '../../Component/LoginWithSocial/LoginWithGithub';
import LoginWithFacebook from '../../Component/LoginWithSocial/LoginWithFacebook';
import LoginWithApple from '../../Component/LoginWithSocial/LoginWithApple';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import Header from '../../Layout/Header/Header';
import { useEffect } from 'react';
const LoginPage = ({setTitle}) => {

  const [message , setMessage] = useState("");
   
 useEffect(() => {
  setTitle("Login")
 }, []);
  const auth = getAuth(app); 
    const handleSubmit = (e)=>{
        e.preventDefault();
 let email = e.target.email.value
 let password = e.target.password.value
 signInWithEmailAndPassword( auth,email, password)
 .then((userCredential) => {
 
   const user = userCredential.user;
   console.log(user)
 
 
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   console.log(error)
   setMessage("Email or password doesn't match");
   // ..
 });
    }

 
    return (
        <>
   
      <section className=" md:w-full  min-h-[100vh]  flex justify-center  px-4 md:px-0 mt-12">
  <div className="flex flex-col gap-5">
    <div className="flex gap-5 text-2xl font-semibold items-center">
      <Link to="/login" className="border-b-4 border-[#cb6f06] py-2">Login</Link>
      <Link  to="/register" className="py-2 text-gray-500">Register Now</Link>
    </div>
    <form onSubmit={handleSubmit} className="flex flex-col gap-5  ">
      <input
        type="email"
        name="email"
        id=""
        onChange={()=>setMessage("")}
        placeholder="Enter Your Email"
        className="p-2 rounded-lg text-black  border"
      />
      <input
        type="password"
        name="password"
        id=""
        onChange={()=>setMessage("")}
        placeholder="Enter Password"
        className="p-2 rounded-lg text-black border"
      />
      <p className='text-red-600'> {message}</p>
      <button className="bg-gradient-to-r from-orange-500 text-white font-semibold py-3 rounded-2xl via-orange-500 to-orange-500 hover:scale-110 hover:rounded-lg transition-all ease-in-out duration-700">Login</button>
      {/* <a href="#">Forgot Password?</a> */}
      <a href="#">If you've no account <Link to="/register" className='text-orange-500'>Create One</Link> </a>
    </form>
    <div className="grid grid-cols-2 gap-4 text-black text-[10px] md:text-sm">
   {/* <LoginWithFacebook/>
   <LoginWithApple/> */}
     <LoginWithGoogle className='invisible'/>
{/* */}
  <LoginWithGithub className='invisible'/>
    </div>
  </div>
</section>


        </>
    );
}

export default LoginPage;
