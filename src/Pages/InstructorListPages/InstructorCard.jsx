import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthContextProvider';
import { AiOutlineArrowRight } from 'react-icons/ai';

const InstructorCard = ({ data, disablebtn }) => {

  const { dark } = useContext(AuthContext);
  return (
    <div className={`border  ${dark ? 'border-gray-500 rounded' : 'border-gray-200 shadow-lg'}`}>
      <div className={data.availableseat == 0 && `bg-red-500`}>
        <div className="relative">
          <div className="relative h-72 w-full overflow-hidden ">
            <img src={data.photoURL} alt="" className="h-full w-full object-cover object-center" />
          </div>
          <div className="relative mt-2 p-3">
            <p className={`text-xl text-gray-800 font-semibold capitalize`}> {data.name} </p>
            <p className="mt-1  text-gray-500"><span>Email :</span> {data.email}</p>
            <div className='flex justify-between items-center mt-4 mb-3'>
              <p className="mt-1  font-semibold capitalize pb-3 text-gray-500">{data.role}</p>
              <button className='bg-blue-600 shadow-sm  float-right py-1 px-2 rounded   text-white' >See Classes < AiOutlineArrowRight className='inline pb-1 text-xl' /> </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default InstructorCard;
