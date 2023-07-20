import React, { useEffect, useState } from 'react';
import PopularClassesCard from '../../PopularClassesCard/PopularClassesCard';
import axios from 'axios';
import Spinner from '../../Spinner/Spinner';
import ClassCard from '../../../Pages/ClassesListPage/ClassCard';
import { AuthContext } from '../../../Provider/AuthContextProvider';
import { useContext } from 'react';


const PopularClassesComponent = () => {
  const [loading, setLoading] = useState(true)
  const {dark} = useContext(AuthContext);
  const [popularClassesData, setPopularClassesData] = useState(true)
  useEffect(() => {
    axios.get("/popularclasses")
      .then(response => {
        setPopularClassesData(response.data)
        setLoading(false)
      })
  }, []);
  const darkText = 'text-gray-700';
  const lightText = 'text-gray-200'
  return (
    <>
      <div class="bg-transparent">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <p className={`${dark?lightText:darkText} text-6xl  text-center  font-thin  mt-20 mb-20`}>Our Popular Classes</p>
          <div class="mt-8 grid grid-cols-1  sm:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-x-6">
            {loading ? <>
              <Spinner />
            </> : <>
              {popularClassesData.map(e => {
                return <>
                  <PopularClassesCard data={e} />
                </>
              })}
            </>}





          </div>
        </div>
      </div>
    </>
  );
}

export default PopularClassesComponent;
