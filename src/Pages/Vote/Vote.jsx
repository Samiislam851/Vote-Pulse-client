import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContextProvider';
import OTPPage from '../OTPPage/OTPPage';

const Vote = () => {
  const [electionType, setElectionType] = useState('');
  const [electionTitle, setElectionTitle] = useState('');
  const [electionDesc, setElectionDesc] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [renderCandidate, setRenderCandidate] = useState([]);
  const [renderCandidateLoading, setRenderCandidateLoading] = useState(true);
  const { electionid } = useParams();
  const { user, toastPush, role } = useContext(AuthContext)
  const [alreadyVoted, setAlreadyVoted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [voteCounted, setVoteCounted] = useState(0);
  const [formState, setFormState] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {

    if (loading) {
      axios.get(`/vote/check/${electionid}/${user.email}`)
        .then(response => {
          let candidateId = response.data[0].candidateId;
          console.log(response.data)
          setSelectedOption(candidateId)
          if (candidateId) {
            setAlreadyVoted(true)
            setLoading(false)

          }
        })
        .catch(err => {
          setLoading(false)
        })


      axios.get(`/candidates/${electionid}`)
        .then(response => {
          let data = response.data;
          setRenderCandidate(data)
          setRenderCandidateLoading(false)
        })


      axios.get(`/electiontitle/${electionid}`)
        .then(res => {
          setElectionTitle(res.data.title)
          setElectionDesc(res.data.electiondescription)
          setElectionType(res.data.type)
        })
    }

  }, []);

  const nextButtonHandler = (e) => {
    setFormState(formState + 1)
  }

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted vote:', selectedOption);
    navigate(`/vote/faceverify/${electionid}/${selectedOption}?redirecturl=${window.location.pathname}`)
    // if (user) {

    //   axios.post("/sendotp", {
    //     to: user.email
    //   })
    //     .then(response => {
    //       console.log(response.data)
    //       toastPush('Otp send')
    // navigate(`/vote/otpverify/${electionid}/${selectedOption}?redirecturl=${window.location.pathname}`)
    //     })
    // }
    // let dataInsert = {
    //   candidateId: selectedOption,
    //   useremail: user.email,
    //   electionId: electionid

    // }
    // axios.post('/vote/submit/', dataInsert)
    //   .then(response => {
    //     console.log(response.data)
    //     setAlreadyVoted(true)
    //     setVoteCounted(1);
    //     toastPush("Vote Successful")
    //   })
  };
  if (user) {
    return (
      <div className="min-h-screen py-20">
        <h2 className="text-4xl  md:text-6xl font-semibold text-gray-600 text-center">{electionTitle}</h2>
        <h3 className='text-xl text-gray-500 font-thin text-center pt-5'>Type - {electionType}</h3>
        <p className='text-center text-gray-400 text-lg w-[90%] md:w-[60%] mx-auto py-10'>{electionDesc}</p>

        <div className="max-w-3xl mx-auto mt-8">
          {!loading && (
            <form onSubmit={handleSubmit} className="rounded-2xl p-10">

              <div className="space-y-4">
                {!renderCandidateLoading &&
                  renderCandidate.map((e) => (
                    <div key={e._id} className="flex items-center hover:scale-105 transition-all duration-300 ease-out gap-10 justify-between border px-2 md:px-10 py-5 rounded-lg shadow-lg md:w-[80%] mx-auto">
                      <div>
                        <img
                          src={e.photoURL}
                          alt="Option 1"
                          className="mt-2 w-auto h-20 rounded-lg object-cover"
                        />
                        <h3 className="text-xs font-light text-center text-gray-400 pt-1">
                          Vote Count : {e.vote + voteCounted}</h3>

                      </div>
                      <h2 className="text-xl font-medium text-center text-gray-600">
                        {e.name}
                      </h2>
                      <input
                        type="radio"
                        id="option1"
                        name="vote"
                        value={e._id}
                        checked={selectedOption === e._id}
                        onChange={handleOptionChange}
                        className="form-radio radio-info h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      />
                    </div>
                  ))}
              </div>







              <div className="mt-6 w-fit mx-auto">
                <button
                  disabled={role === 'admin' || alreadyVoted}
                  type="submit"
                  className="btn bg-blue-600 text-white px-8 btn-primary "
                >
                  Next
                </button>
            
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }
  else {
    <Navigate to='/login' />
  }

};

export default Vote;