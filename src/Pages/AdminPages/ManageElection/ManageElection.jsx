import React, { useEffect, useState, createContext, useContext } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom'
import Spinner from '../../../Component/Spinner/Spinner';
import { AuthContext } from '../../../Provider/AuthContextProvider';

const ManageElection = ({ setTitle }) => {
    const { registerUser, user, logOut, loginUser, isLogged, setIsLogged, toastPush } = useContext(AuthContext);



    const [loading, setLoading] = useState(true)
    const [renderData, setRenderData] = useState(null);
    const [myClassesData, setmyClassesData] = useState(null)
    const [currentID, setCurrentID] = useState(null)
    const [feedbackdetails, setFeedbackdetails] = useState(null)
    const [feedbackclassid, setfeedbackclassid] = useState(null)
    const [progresssending, setprogresssending] = useState(false)
    const [deleted, setdeleted] = useState(false)

    useEffect(() => {
        if (loading) {
            setTitle("Manage Elections")
            axios.get(`/admin/elections`)
                .then(response => {
                    let data = response.data
                    setmyClassesData(data)
                    setRenderData(data)
                    setLoading(false)

                })
        }
    }, []);

    const deleteButtonHandler = (e) => {
        axios.delete("/delete/" + currentID)
            .then(response => {
                let data = renderData.filter(e => e._id != currentID)
                setCurrentID(null)
                setRenderData(data)
                toastPush("Deleted Successfully");
                setdeleted(true);
            })
            .catch(err => {
                console.log(err)
            })
    }


    const approveBtnHanlder = (e) => {
        const updatedData = renderData.map(obj => {
            if (obj._id === e) {
                return { ...obj, status: "running" };
            }
            return obj;
        });
        console.log(updatedData)
        setRenderData(updatedData)

        axios.put(`/election/${e}/running`).then(response => {
            console.log(response.data)
            toastPush("Election started")
        })
    }
    const denyBtnHanlder = (e) => {
        const updatedData = renderData.map(obj => {
            if (obj._id === e) {
                return { ...obj, status: "ended" };
            }
            return obj;
        });
        console.log(updatedData)
        setRenderData(updatedData)
        axios.put(`/election/${e}/ended`).then(response => {
            console.log(response.data)
            toastPush("Election ended")
        })
    }
    const feedbackBtnHanlder = (e) => {
        setfeedbackclassid(e);

    }
    const sybmitFeedbackHandle = (e) => {
        setprogresssending(true)
        setfeedbackclassid(null);
        setFeedbackdetails(null);

        const updatedData = renderData.filter(obj => obj._id !== feedbackclassid)

        console.log(updatedData)
        setRenderData(updatedData)
        setfeedbackclassid(null)
        axios.delete(`/admin/election/delete/${feedbackclassid}`)
            .then(response => {
                console.log(response.data)
                setprogresssending(false)
                toastPush("Election Deleted")
                setdeleted(true)
            })
            .catch(err => toastPush("Deletion Error"))
    }
    return (
        <>
            <h1 className='text-center text-5xl text-gray-600 my-font'>Manage Elections</h1>



            <input type="checkbox" id="feedbackbtnmodal" class="modal-toggle" />
            <label for="feedbackbtnmodal" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <h3 class="text-lg font-bold">Write a feedback</h3>

                    <div>

                        <button className="btn  btn-error text-white bg-red-500 mt-5" onClick={sybmitFeedbackHandle} disabled={progresssending || deleted }>
                            {progresssending && <div class="w-4 h-4 rounded-full animate-spin
                    border-2 border-solid border-white border-t-transparent"></div>}

                            <span>Delete</span>
                        </button>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="feedbackbtnmodal" className="btn bg-green-300 hover:bg-green-400">Close!</label>



                    </div>
                </label>
            </label>

            <section className='mt-12'>
                {/* <div className="tabs">
 
        <Link to="/instructor" className="tab tab-lg tab-lifted tab-active ">My Classes</Link> 
 <Link to="/instructor/addclass" className="tab tab-lg tab-lifted" >Add Class</Link> 
</div> */}
            </section>

            <>


                {
                    currentID && <>
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Warning</h3>
                                <p className="py-4">Are You Ready to delete this?</p>
                                <div className="modal-action">
                                    <button onClick={deleteButtonHandler} className="btn btn-warning">Yes</button>
                                    <label htmlFor="my-modal" className="btn">No</label>
                                </div>
                            </div>
                        </div>
                    </>
                }


                {user ?
                    <>

                        <section className='flex flex-col items-center justify-center mt-8 space-y-8'>
                            <div className="overflow-x-auto  ">


                                <table className="table w-full mb-20">
                                    <thead>
                                        <tr>
                                            <th>Election Name</th>
                                            <th>Type</th>
                                            <th>Status</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>



                                        {loading ? <>
                                            <Spinner />
                                        </> : <>
                                            {renderData.map(e => {

                                                return <>
                                                    <tr>

                                                        <td>
                                                            <div className="flex items-center space-x-3">
                                                                <div className="avatar ">
                                                                    <div className="mask mask-squircle w-12 h-12">
                                                                        <img src={e.image} alt="Avatar Tailwind CSS Component" />
                                                                    </div>
                                                                   
                                                                </div>
                                                                <div>
                                                                    <div className="font-bold text-gray-600">{e.title}</div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td >

                                                            {e.type}


                                                        </td>


                                                        <td >
                                                            <span className={`btn hover:bg-transparent ${e.currentStatus === 'pending' ? 'bg-transparent text-yellow-500 font-bold' : (e.currentStatus === 'running' ? 'bg-transparent  font-semibold font-bold text-green-500' : 'font-bold bg-transparent text-red-500')} btn-xs  `}>
                                                                {e.currentStatus}
                                                            </span>

                                                        </td>

                                                        <td>
                                                            <div className="flex ">
                                                                <button onClick={() => approveBtnHanlder(e._id)} className="btn px-4  bg-blue-600 text-white hover:bg-blue-500 btn-xs " disabled={e.status == 'running' ? true : false}>Start</button>
                                                                <button onClick={() => denyBtnHanlder(e._id)} className="btn px-4 btn-xs border-none bg-red-600 text-white hover:bg-red-400 border-none" disabled={e.status == 'ended' ? true : false}>Stop</button>
                                                                <label for="feedbackbtnmodal" onClick={() => feedbackBtnHanlder(e._id)} class="btn px-4 btn-xs bg-yellow-600 text-white hover:bg-yellow-500 border-none">Delete</label>
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <Link to={`/admin/managecandidate/${e._id}`} className="btn  btn-xs bg-purple-600 text-white hover:bg-purple-500 ">View</Link>
                                                        </td>

                                                    </tr>
                                                </>
                                            })}
                                        </>}






                                    </tbody>
                                </table>
                            </div>

                        </section>
                    </> : <>

                        <div className='flex justify-center mt-12'>
                            <h1 className='text-4xl font-semibold text-center'>No Content Available. User needs to Sign in</h1>
                        </div>
                    </>



                }
            </>
        </>
    );
}


export default ManageElection;
