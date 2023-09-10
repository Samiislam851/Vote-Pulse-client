import React from 'react';
import { Link } from 'react-router-dom';

const ClassCard = ({election}) => {
    const { _id, type, currentStatus,  title, image } = election
    return (
        <>

            {/* <div className={ `${data.availableseat == 0 && 'bg-red-50'}  px-4 py-3 rounded-lg`}>
        <div className="relative">
          <div className="relative h-72 w-full overflow-hidden rounded-lg">
            <img src={data.image} alt="" className="h-full w-full object-cover object-center"/>
          </div>
          <div className="relative mt-4">
            <h3 className="text-sm font-medium text-gray-900"> ({data.enrolledstudents} Enrolled)</h3>
            <p>Price : {data.price}</p>
            <p className="mt-1 text-sm text-gray-500">By {data.instructorname} ({data.availableseat} seat left)</p>
          </div>
          <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
            <p className="relative text-lg font-semibold text-white">{data.classname}</p>
          </div>
        </div>
        <div className="mt-6">
     
          <button onClick={() => selectClassHandler(data._id)} className='btn cursor-pointer w-full  relative flex items-center justify-center rounded-md border border-transparent bg-gray-100  text-sm font-medium text-gray-900 hover:bg-gray-200' disabled={disablebtn}>Select</button>
        </div>
      </div>       */}
            <div className="max-w-[full] rounded border shadow-lg my-20 pb-6">
                <img className="w-full h-[50%] rounded" src={image} alt={title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        Type: {type}
                    </p>
                    <p className="text-gray-700 text-base">
                        Status: {currentStatus=='pending'?'To be held':(currentStatus=='running'?'Running':'Ended')}
                    </p>
                    {/* <p className="text-gray-700 text-base">
                        Start Date: {dates.start}
                    </p>
                    <p className="text-gray-700 text-base">
                        End Date: {dates.end}
                    </p> */}
                </div>
                <div className="px-6 py-4">
                    <Link to={`/vote/${_id}`} className='px-5 py-3 rounded hover:bg-orange-700 bg-orange-500 text-xl  text-white'>View Details</Link>
                </div>
            </div>

        </>
    );
}

export default ClassCard;
