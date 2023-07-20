import React from 'react';
import { AuthContext } from '../../Provider/AuthContextProvider';
import { useContext } from 'react';

const PopularClassesCard = ({data , disablebtn}) => {
  const {dark} = useContext(AuthContext);
  return (
      <>
     <div className={` pb-5  ${dark ? ' ' : 'border border-gray-200 rounded '}`}>
        <div className="relative">
          <div className="relative h-72 w-full overflow-hidden rounded">
            <div className='w-[100%] h-[100%] bg-black absolute opacity-30 blur '></div>
            <img src={data.image} alt="" className="h-full w-full object-cover object-center"/>
          </div>
          <div className="relative my-4 mx-2 me-5">
            <p className='text-lg font-semibold text-gray-500'>Price : <span className='text-xl text-gray-600'>${data.price} </span> </p>
            <p className=" font-medium text-gray-500"> Enrolled : {data.enrolledstudents}  </p>
            <p className='text-gray-500 inline float-right'> Seats left  {data.availableseat} </p>
            <p className="mt-1 text-sm text-gray-500">By {data.instructorname} </p>
          </div>
          <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-start overflow-hidden rounded-lg p-4">
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
            <p className="relative text-3xl font-semibold mb-2 text-gray-400 text-white">{data.classname}</p>
          </div>
        </div>
        
      </div>        
      </>
  );
}

export default PopularClassesCard;
