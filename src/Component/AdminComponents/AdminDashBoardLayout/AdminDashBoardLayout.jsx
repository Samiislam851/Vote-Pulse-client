
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthContextProvider';
import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';



const AdminDashBoardLayout = () => {
  const { registerUser, user, logOut, loginUser, isLogged, setIsLogged, toastPush } = useContext(AuthContext);
  console.log(user);
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
      <div className="font-sans text-gray-900 antialiased">
        <div className="min-h-[100vh] flex bg-gray-200">
          <div className="flex-shrink-0 w-64 bg-[#283148]">
            <Link to="#">
              <div className="flex items-center h-16 px-4 bg-gray-800 text-xl text-white font-medium">

                <div className="ml-2" style={{ paddingTop: 2 }}>
                  Admin Dashboard
                </div>
              </div>
            </Link>
            <div>
              <div className="px-2 py-2">
                <div>{/**/}</div>
              </div>
              <div className="px-6 py-6 text-white">
                <Link
                  to="/admin"
                  className="router-link-exact-active router-link-active"
                >
                  Dashboard
                </Link>
              </div>
              {/**/}
              <div className="px-6 py-6 border-t border-gray-700">
                <h4 className="text-sm text-gray-600 uppercase font-bold tracking-widest">
                  Manage
                </h4>
                <ul className="mt-3 text-white">
         
                  <li className="mt-3">
                    <Link to="/admin/manageusers" className="">
                      Manage Users
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/admin/add/election" className="">
                      Add Election
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/admin/manageelection" className="">
                      Manage Election
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col">
            <div className="relative shadow-md bg-white flex-shrink-0">
              {/* <div className="flex justify-between items-center h-16 px-12">
                <div>
                 
                </div>
                <div className="flex items-center">

                  <div className="ml-6">
                 
                    <div className="relative">
                      <button
                        type="button"
                        className="block w-full focus:outline-none"
                      >
                        <span className="flex items-center">
                          <img
                            src={`https://www.gravatar.com/avatar/9240e2357dc0b9a4cfd1b109c23af063?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F${user?.displayName}`}
                            className="h-8 w-8 rounded-full"
                          />
                          <span className="ml-3">{user?.displayName}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6 ml-2 text-gray-600"
                          >
                            <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" />
                          </svg>
                        </span>
                      </button>
                   
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="flex-grow flex flex-col mt-8 px-[1%]">
              <Outlet />

            </div>
          </div>
        </div>
      </div>
      <div className="vue-portal-target" />
      {/**/}
    </>

  );
}

export default AdminDashBoardLayout;

