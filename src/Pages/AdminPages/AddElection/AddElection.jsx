

import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthContextProvider';

const AddElection = ({ setTitle }) => {
  const [loading, setLoading] = useState(true);
  const [done, setDone] = useState(false);
  const [electionsData, setelectionsData] = useState(null);
  const [message, setMessage] = useState(null);
  const [imguploadingmessage, setimguploadingmessage] = useState(null);
  const [progresssending, setProgresssending] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  const { user, toastPush } = useContext(AuthContext);
  useEffect(() => {
    setTitle("Add an Election")
    setLoading(false)
  }, []);
  const formSubmitHandler = async (e) => {

    setProgresssending(true)
    e.preventDefault()
    let dataInsert = { ...electionsData, image: uploadedImageUrl, currentStatus: 'pending' }

    axios.post("/add/election", dataInsert)
      .then(response => {
        setProgresssending(false)
        toastPush("Election Added Successfully")
        setUploadedImageUrl(null)
       e.target.reset();
      })
      .catch(err => {
        console.log(err)
        setProgresssending(false)
        toastPush("Failed to add election")
      })


  }



  const inputChangeHandler = (e) => {
    setelectionsData({ ...electionsData, [e.target.id]: e.target.value })
    console.log(electionsData)
    setMessage(null)
  }
  const imageUploadHandler = (e) => {
    setimguploadingmessage("Wait... Image Is Uploading")
    setProgresssending(true)
    const formData = new FormData();
    const countFile = e.target.files.length;
    console.log(countFile);

    for (let i = 0; i < countFile; i++) {
      formData.append("image", e.target.files[i]);

      axios({
        method: 'post',
        url: 'https://api.imgbb.com/1/upload?expiration=0&key=89cd126a18f125ea9e7f8256dcb15acb',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((response) => {
          console.log(response.data);
          setUploadedImageUrl(response.data.data.display_url)
          setimguploadingmessage(null)
          setProgresssending(false)
        })
        .catch((error) => {
          setimguploadingmessage("Error")
          setProgresssending(false)
        });
    }

  }

  const input = [
    {
      inputtype: "text",
      label: "Election Name",
      nameid: "title"
    },
    {
      inputtype: "custom",
    },
    {
      inputtype: "text",
      label: "Election Description",
      nameid: "electiondescription"
    },
    {
      inputtype: "text",
      label: "Election Type",
      nameid: "type"
    }

  ]
  return (
    <>

      <section className='flex flex-col justify-center items-center space-y-5 mt-8 pb-12'>

        {loading ? <></> :



          <form action="" className='w-[90%] md:w-[50%]' onSubmit={formSubmitHandler}>

            {
              input.map(e => <>
                {e.inputtype == 'custom' ? <><div className='grid grid-cols-2'>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Class Image</span>
                    </label>
                    <input type="file" onChange={imageUploadHandler} name='img' id='img'  className="file-input file-input-bordered w-full max-w-xs" required />
                  </div>
                  <div className='mt-3'>
                    {
                      uploadedImageUrl && <img src={uploadedImageUrl} />
                    }
                  </div>
                </div></> : <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">{e.label}</span>
                  </label>
                  <input name={e.nameid} required id={e.nameid} onChange={inputChangeHandler} type="text" placeholder={e.label} className="input input-bordered w-full " />
                </div>}

              </>)
            }
            <div className='flex justify-center mt-4'>
              <button className="btn btn-primary gap-2" disabled={progresssending}>
                {progresssending && <div class="w-4 h-4 rounded-full animate-spin
                    border-2 border-solid border-white border-t-transparent"></div>}

                <span>Add election</span>
              </button>
            </div>
          </form>}

      </section>

    </>
  );
}


export default AddElection;
