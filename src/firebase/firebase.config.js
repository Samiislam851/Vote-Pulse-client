import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import dotenv from 'dotenv';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// dotenv.config();
 
 console.log(import.meta.env.VITE_AUTH_DOMAIN)
 const firebaseConfig = {
  
 apiKey: "AIzaSyBAvg5FrAWzZZimGQmz4G3qFOP1sQJnKyA",
  authDomain: "vote-pulse.firebaseapp.com",
  projectId: "vote-pulse",
  storageBucket: "vote-pulse.appspot.com",
  messagingSenderId: "1082874620948",
  appId: "1:1082874620948:web:8d49ae518fb965a5f8cb01"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBHSlGdWVHoTRp5n8kkqVVHE-j02k_Rzqc",
//   authDomain: "hoichoidev-f27a5.firebaseapp.com",
//   projectId: "hoichoidev-f27a5",
//   storageBucket: "hoichoidev-f27a5.appspot.com",
//   messagingSenderId: "579988425072",
//   appId: "1:579988425072:web:29fd71348b5d7ab92767b5",
//   measurementId: "G-VNL3TW7L1V"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;