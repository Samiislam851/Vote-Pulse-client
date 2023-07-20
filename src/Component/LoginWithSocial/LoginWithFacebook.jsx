 
import React from 'react';
import {  FacebookAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'; 
import app from '../../firebase/firebase.config';
const auth = getAuth(app);
const facebookprovider = new FacebookAuthProvider();
import {
 
    useNavigate,
  } from 'react-router-dom';
const LoginWithFacebook = () => {
    const navigate = useNavigate();
   const loginWithFaceBook = ()=>{
   
    signInWithPopup(auth, facebookprovider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
  
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
  
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
  
      // ...
    });
      }
    return (
        <>
        
                <button  onClick={loginWithFaceBook}  className="flex items-center bg-white px-2 md:px-8 py-1 md:py-3 rounded-lg font-semibold">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className=""
            width="38px"
            height="30px"
          >
            <path
              fill="#039be5"
              d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
            />
            <path
              fill="#fff"
              d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
            />
          </svg>
        </span>
        <span>Login With Facebook</span>
      </button>
        </>
    );
}

export default LoginWithFacebook;
