
import React, { createContext, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [role, setRole] = useState(null);
  const [isInstructor, setIsInstructor] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [token, setToken] = useState(false);
  const [userData, setUserData] = useState(false);
  const [adminStateLoading, setAdminStateLoading] = useState(true)
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const [dark, setDark] = useState(false);
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (event) => {
    if (event.target.checked) {
      setTheme("light");
      setDark(false)
    } else {
      setTheme("light");
      setDark(false);
    }
  }

  useEffect(() => {
    if (theme == "dark") {
      setDark(false);
      // console.log('setting dark ', dark);
    }
    else {
      setDark(false);
      // console.log('setting dark', dark);
    }
  }, [dark]);

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setUser(null);
    setIsLogged(false);
    setIsAdmin(false);
    setRole(null);
    setIsInstructor(false);
    setIsStudent(false);
    setToken(false);
    setUserData(false);

    return signOut(auth);
  };



  const toastPush = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  useEffect(() => {
    if (localStorage.getItem('access-token')) {
      setToken(localStorage.getItem('access-token'))
      // axios.defaults.headers.common['Authorization'] = 'Bearer ' +localStorage.getItem('access-token');
    }
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
      if (loggedInUser) {
        setIsLogged(true);

        axios.post("/users", {
          name: loggedInUser.displayName,
          photoURL: loggedInUser.photoURL,
          email: loggedInUser.email,
          role: 'voter'
        })
          .then(response => {

            console.log(response.data.data.role)
            setUserData({
              name: response.data.data.name,
              email: response.data.data.email,
              photoURL: response.data.data.photoURL,
            })
            let role = response.data.data.role;

            setRole(role)
            if (role == 'admin') {
              setIsInstructor(false)
              setIsAdmin(true)
              setIsStudent(false)
              setAdminStateLoading(false)
            } else if (role == 'instructor') {
              setIsInstructor(true)
              setIsAdmin(false)
              setIsStudent(false)
              setAdminStateLoading(false)
            } else if (role == 'student') {
              setIsInstructor(false)
              setIsAdmin(false)
              setIsStudent(true)
              setAdminStateLoading(false)
            }
            setLoading(false);
          })

        axios.post('/jwt', { email: loggedInUser.email })
          .then(data => {
            setToken(data.data.token)
            localStorage.setItem('access-token', data.data.token)
            // axios.defaults.headers.common['Authorization'] ='Bearer ' +data.data.token;
            setLoading(false);
          })



      } else {
        localStorage.removeItem('access-token')
      }
      setLoading(false)
    });
    return () => {
      unSubscribe();

    };
  }, []);

  const authInfo = { registerUser, user, logOut, loginUser, isLogged, setIsLogged, toastPush, isAdmin, isStudent, isInstructor, loading, adminStateLoading, userData, setUserData, setTheme, handleToggle, dark, theme, role };
  return (
    <AuthContext.Provider value={authInfo}>{!loading && children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;