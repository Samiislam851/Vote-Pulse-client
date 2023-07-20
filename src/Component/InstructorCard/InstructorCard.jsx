import React from 'react';

const InstructorCard = ({data , disablebtn}) => {
    return (
 
      <div className="group relative   border-gray-200 p-4 sm:p-6">
      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
        <img
          src={data.photoURL}
          alt="TODO"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="pt-10 pb-4 text-center">
        <h3 className="text-sm font-medium text-gray-900">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {data.name}
          </a>
        </h3>
        
         
      </div>
    </div>
       
      
      
    );
}

export default InstructorCard;
