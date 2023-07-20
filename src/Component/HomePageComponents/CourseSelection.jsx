import React from 'react';
import { AuthContext } from '../../Provider/AuthContextProvider';
import { useContext } from 'react';

const CourseSection = () => {
  const courses = [
    {
      title: 'Beginner Courses',
      description: 'A comprehensive introduction to the basics of the subject.',
      level: 'Beginner',
    },
    {
      title: 'Intermediate Courses',
      description: 'Build upon your foundational knowledge and expand your skills.',
      level: 'Intermediate',
    },
    {
      title: 'Advanced Courses',
      description: 'Master advanced concepts and tackle complex projects.',
      level: 'Advanced',
    },
  ];

  const {dark} = useContext(AuthContext);

  return (
    <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <p className={`${dark?'text-gray-200':'text-gray-500'} text-6xl  text-center font-thin  mt-32 mb-5`}> 
     Courses Levels</p>
      <p className='text-gray-400 text-center mb-20'>Explore our courses by levels</p>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4`}>
        {courses.map((course, index) => (
          <div key={index} className={`bg-gray-300 bg-opacity-10 p-6  border ${dark?'border-blue-900':'border-blue-600'}  py-20 px-10 rounded-lg `}>
            <p className={`text-3xl ${dark?'text-gray-200':'text-gray-500'} my-3 mb-10`}>{course.title}</p>
            <p className={`${dark?'text-gray-200':'text-gray-500'}`}>{course.description}</p>
            <p className={`${dark?'text-gray-200':'text-gray-500'}text-sm  mt-4`}>Level : {course.level}</p>
            <button className="bg-blue-700 hover:bg-blue-800  text-white font-bold py-2 px-4 rounded mt-10">
              View Courses
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
