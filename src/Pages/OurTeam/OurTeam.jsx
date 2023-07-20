import React, { useEffect } from 'react';

const OurTeam = ({setTitle}) => {
    useEffect(() => {
    setTitle('Team')
    }, []);
    return (
        <div className='min-h-[100vh] py-10 md:py-32 w-[90%] md:w-[80%] mx-auto grid gap-14 grid-cols-1 md:grid-cols-3'>


           
            <div className=" w-full h-fit border rounded-lg hover:scale-105  transition-all ease-in-out duration-700 bg-gray-100 shadow-xl">
               <img src="/rodayla.jpg" alt="rodela" className='rounded mx-auto w-full' />
                <div className="pb-7 pt-4">
                    <h2 className="text-xl text-center text-gray-600 font-bold">
                  Rodayla Raiyan
                    </h2>
                    <p className='text-center text-gray-500'>Reg: 1745 </p>  
                </div>
            </div>
            <div className=" w-full h-fit border rounded-lg hover:scale-105  transition-all ease-in-out duration-700 bg-gray-100 shadow-xl">
               <img src="/tithi.png" alt="tithi" className='rounded mx-auto w-full' />
                <div className="pb-7 pt-4">
                    <h2 className="text-xl text-center text-gray-600 font-bold">
                       Afsara Tasnim Tithi  
                    </h2>
                    <p className='text-center text-gray-500'>Reg: 1697 </p>  
                </div>
            </div>
            <div className=" w-full h-fit border rounded-lg hover:scale-105  transition-all ease-in-out duration-700 bg-gray-100 shadow-xl">
               <img src="/DP.jpg" alt="siam" className='rounded mx-auto w-full ' />
                <div className="pb-7 pt-4">
                    <h2 className="text-xl text-center text-gray-600 font-bold">
                     Samiul Islam Siam 
                    </h2>
                    <p className='text-center text-gray-500'>Reg: 1708</p>  
                </div>
            </div>
           
        </div>
    );
};

export default OurTeam;