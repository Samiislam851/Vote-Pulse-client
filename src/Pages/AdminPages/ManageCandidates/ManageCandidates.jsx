

import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthContextProvider';
import Multiselect from 'multiselect-react-dropdown';


const ManageCandidates = ({ setTitle }) => {
    const [loading, setLoading] = useState(true);
    const [done, setDone] = useState(false);
    const [electionsData, setelectionsData] = useState(null);
    const [message, setMessage] = useState(null);
    const [imguploadingmessage, setimguploadingmessage] = useState(null);
    const [progresssending, setProgresssending] = useState(false);
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
    const [options, setoptions] = useState([{ name: 'Option 1️⃣', id: 1 }, { name: 'Option 2️⃣', id: 2 }]);
    const [candidates, setCandidates] = useState([{ "_id": "64b41ddb67b810554b43df71", "name": "Siam", "email": "admin@gmail.com", "photoURL": "https://i.ibb.co/Qp7CpRP/DP.jpg", "role": "admin", "nid": "1234567" }]);
    const [candidatesLoading, setCandidatesLoading] = useState(true)
    const [selectCandidated, setSelectCandidates] = useState([]);
    const [selectCandidatesLoading, setSelectCandidatesLoading] = useState(true)
    const [buttonDisable, setButtonDisable] = useState(false)


const {electionid} = useParams()
    const { user, toastPush } = useContext(AuthContext);
    useEffect(() => {
        setTitle("Add an Election")
        setLoading(false)

        axios.get("/users/notcandidate")
            .then(response => {
                setCandidates(response.data)
                setCandidatesLoading(false)
            })

        axios.get(`/get/candidate/${electionid}`)
        .then(response=>{
            setSelectCandidates(response.data)
            setSelectCandidatesLoading(false)
        })

    }, []);
    const formSubmitHandler = async (e) => {

         setProgresssending(true)
        e.preventDefault()
      
        let dataInsert = { selectCandidated,electionid  }
        console.log(dataInsert)

        axios.post(`/add/candidate/${electionid}`, dataInsert)
            .then(response => {
                setProgresssending(false)
                toastPush("Candidate Added Successfully")
                setUploadedImageUrl(null)
                e.target.reset();
            })
            .catch(err => {
                console.log(err)
                setProgresssending(false)
                toastPush("Failed to add Candidate")
            })


    }
    const onSelect = (selectedList, selectedItem) => {
        setButtonDisable(true)
       setSelectCandidates(selectedList)
       setButtonDisable(false)

    }

    const onRemove = (selectedList, removedItem) => {
        setButtonDisable(true)
        setSelectCandidates(selectedList)
        console.log(removedItem._id)
          axios.delete(`/delete/candidate/${removedItem._id}/${electionid}`)
        .then(response=>{
            setButtonDisable(false)
        })
        .catch(err=>{

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


    return (
        <section className='flex flex-col justify-center items-center space-y-5 mt-8 pb-12 text-white'>

            {loading ? <></> :



                <form action="" className='w-[90%] md:w-[50%]' onSubmit={formSubmitHandler}>

                    {/* <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">fsdfsd</span>
                        </label>
                        <input name="" required id="{ameid}" onChange={inputChangeHandler} type="number" placeholder="dfsff" className="input input-bordered w-full " />
                    </div> */}


                    {
                        !candidatesLoading && !selectCandidatesLoading &&
                        <Multiselect
                            options={candidates} // Options to display in the dropdown
                            onSelect={onSelect} // Function will trigger on select event
                            selectedValues={selectCandidated}
                            onRemove={onRemove} // Function will trigger on remove event
                            displayValue="name" // Property name to display in the dropdown options
                            className='text-gray-500 font-semibold bg-transparent'
                            
                        />
                    }











                    <div className='flex justify-center mt-4'>
                        <button className="btn bg-blue-600 border-0 hover:bg-blue-700  btn-primary gap-2" disabled={progresssending || buttonDisable}>
                            {progresssending && <div class="w-4 h-4 rounded-full animate-spin
                    border-2  border-solid border-white border-t-transparent"></div>}

                            <span>Add Candidates</span>
                        </button>
                    </div>
                </form>}

        </section>
    );
}

export default ManageCandidates;
