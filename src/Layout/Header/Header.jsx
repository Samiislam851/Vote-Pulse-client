import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContextProvider';
import ActiveLink from '../../Component/ActiveLink/ActiveLink';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Header = () => {



  const [langBtn, setLangBtn] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [imgDetails, setImgDetails] = useState(false)
  const { registerUser, user, logOut, loginUser, isLogged, setIsLogged, isAdmin, isInstructor, loading, userData, setUserData, theme, dark, handleToggle } = useContext(AuthContext);

  // const { registerUser, user, logOut, loginUser, isLogged, setIsLogged, ,} = useContext(AuthContext);
  console.log("Dark :", dark);
  console.log("Theme", theme);

  const [open, setOpen] = React.useState(false);

  const [onHomepage, setOnHomepage] = useState(false);



  const location = useLocation();
  const currentPath = location.pathname;
  console.log('from header .. user : ', user);
  useEffect(() => {
    if(typeof window.localStream!== 'undefined'){
      window.localStream.getTracks().forEach(function(track) {
        track.stop();
      });
   
      window.localStream.srcObject = null;
    }
  
    if (currentPath == '/') {
      setOnHomepage(true)
    } else {
      setOnHomepage(false);
    }

  }, [currentPath]);




  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className={` ${onHomepage ? 'bg-white' : dark ? 'bg-white' : 'bg-white'} md:border-b-2 `}>
        <div className="w-full mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center   border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <h1 className='h-8 my-font w-auto sm:h-10 font-sans text-orange-500 text-5xl hover:scale-110 transition-all ease-in-out duration-700 font-semibold flex gap-2 justify-center items-center  '> <span className='text-gray-600'>Vote</span> Pulse </h1>

              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-600 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className={`hidden md:flex p-3 px-5  ${dark ? ' ' : ''} rounded-3xl space-x-10`}>
              <ActiveLink
                to="/"
                className="text-base font-medium text-gray-500 hover:text-orange-500 hover:scale-110 transition-all ease-in-out duration-700"
              >
                Home
              </ActiveLink>


              {/* {user && */}
                <ActiveLink
                  to="/ongoing"
                  // previously classes
                  className="text-base font-medium text-gray-500 hover:text-yellow-100 hover:scale-110 transition-all ease-in-out duration-700"
                >
                  Ongoing Elections
                </ActiveLink>

              {/* } */}



              {(user && !loading && isAdmin) ? <ActiveLink
                to={'/admin'}
                className="text-base font-medium text-gray-500 hover:text-yellow-100 hover:scale-110 transition-all ease-in-out duration-700"
              >
                Dashboard

              </ActiveLink> : <></>}


              <ActiveLink
                to="/team"
                className="text-base font-medium text-gray-500 hover:text-yellow-100 hover:scale-110 transition-all ease-in-out duration-700"
              >
                Our Team
              </ActiveLink>







            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">{!user ?
              <>
                <Link
                  to='/login'
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-orange-500 hover:scale-110 transition-all ease-in-out duration-700"
                >
                  Sign in
                </Link>
                <Link
                  to='/register'
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r
                  from-orange-500 to-orange-600 "
                >
                  Sign up
                </Link>
              </>
              :
              <>
                <img src={userData.photoURL} className='rounded-full h-[50px] border border-1 shadow border-gray-300' title={userData.name} alt="" />
                <button onClick={logOut} className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-100 bg-gray-400 bg-opacity-70 hover:text-white transition-all duration-300 hover:bg-red-500'>Sign Out</button>
              </>}
            </div>
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////// */}

        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-[99999999999] text-center  md:hidden"
              : " hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>

                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8 ">


                  <ActiveLink
                    to="/"
                    className="text-base font-medium text-gray-500 hover:text-orange-500 hover:scale-110 transition-all ease-in-out duration-700"
                  >
                    Home
                  </ActiveLink>

                  <ActiveLink
                    to="/team"
                    className="text-base font-medium text-gray-500 hover:text-orange-500 hover:scale-110 transition-all ease-in-out duration-700"
                  >
                    Our Team
                  </ActiveLink>




                  {/* {user ? <ActiveLink
                   to={!loading && (isAdmin ? '/admin' : (isInstructor ? '/instructor' : '/student'))}
                    className="text-base font-medium text-gray-500 hover:text-yellow-100 hover:scale-110 transition-all ease-in-out duration-700"
                  >
                   Dashboard
                  </ActiveLink> : <></>} */}


                  {user &&
                    <ActiveLink
                      to="/ongoing"
                      // previously classes
                      className="text-base font-medium text-gray-500"
                    >
                      Ongoing Elections
                    </ActiveLink>

                  }


                  <div className=" md:flex items-center justify-end pt-10 md:flex-1 lg:w-0">{!user ?
                    <>
                      <Link
                        to='/login'
                        className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-yellow-100 hover:scale-110 transition-all ease-in-out duration-700"
                      >
                        Sign in
                      </Link>
                      <Link
                        to='/register'
                        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-500 via-orange-500 to-orange-500"
                      >
                        Sign up
                      </Link>
                    </>
                    :
                    <>
                      <img src={userData.photoURL} className='rounded-full mx-auto mb-2 h-[50px] border border-1 shadow border-gray-300' title={user?.displayName} alt="" />
                      <button onClick={logOut} className='ml-8 -ms-1 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-500 me-8 bg-opacity-70 bg-red-600'>Sign Out</button>
                    </>}
                  </div>


                </nav>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
