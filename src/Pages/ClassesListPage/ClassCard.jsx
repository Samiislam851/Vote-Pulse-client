import React from 'react';

const ClassCard = ({data , disablebtn,selectClassHandler}) => {
    return (
        <>
  
         <div className={ `${data.availableseat == 0 && 'bg-red-50'}  px-4 py-3 rounded-lg`}>
        <div class="relative">
          <div class="relative h-72 w-full overflow-hidden rounded-lg">
            <img src={data.image} alt="" class="h-full w-full object-cover object-center"/>
          </div>
          <div class="relative mt-4">
            <h3 class="text-sm font-medium text-gray-900"> ({data.enrolledstudents} Enrolled)</h3>
            <p>Price : {data.price}</p>
            <p class="mt-1 text-sm text-gray-500">By {data.instructorname} ({data.availableseat} seat left)</p>
          </div>
          <div class="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
            <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
            <p class="relative text-lg font-semibold text-white">{data.classname}</p>
          </div>
        </div>
        <div class="mt-6">
          {/* <a href="#" class="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200">Add to bag<span class="sr-only">, Zip Tote Basket</span></a> */}
          <button onClick={() => selectClassHandler(data._id)} className='btn cursor-pointer w-full  relative flex items-center justify-center rounded-md border border-transparent bg-gray-100  text-sm font-medium text-gray-900 hover:bg-gray-200' disabled={disablebtn}>Select</button>
        </div>
      </div>      
        </>
    );
}

export default ClassCard;
