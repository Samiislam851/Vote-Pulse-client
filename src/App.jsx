import { useState ,createContext } from 'react'
 
import RouteHandle from './Config/RouteHandle';
 
import AuthContextProvider from './Provider/AuthContextProvider';
 import axios from 'axios'; 
 axios.defaults.baseURL = "http://localhost:5000/"

  // axios.defaults.baseURL = "http://localhost:5000"
//  import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from '@tanstack/react-query'

// const queryClient = new QueryClient()
//  axios.defaults.baseURL = "http://192.168.0.123:5000/"
//  axios.defaults.baseURL = "https://mongo.raihanmiraj.com/"
 function App() {
 


  return (
    <>
   <AuthContextProvider>
 
   <RouteHandle />
   
   
   </AuthContextProvider>
    </>
  )
}

export default App
