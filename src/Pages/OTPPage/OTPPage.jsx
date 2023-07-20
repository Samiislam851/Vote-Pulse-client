import React, { useContext, useEffect, useState } from 'react';
import './OTPPage.css'
import OTPInput from 'react-otp-input';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthContextProvider';
const OTPPage = () => {

    const [loading, setLoading] = useState(true)
 
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const navigate = useNavigate()
    const { user,toastPush,userData} = useContext(AuthContext)
    const { electionId, candidateId } = useParams()
    const [voteAvailable, setVoteAvailable] = useState(false);
    const [{ otp, numInputs, separator, minLength, maxLength, placeholder, inputType }, setConfig] = useState({
        otp: '',
        numInputs: 4,
        separator: '-',
        minLength: 0,
        maxLength: 40,
        placeholder: '',
        inputType: 'text',
    });

    var redirecturl = searchParams.get('redirecturl');
    useEffect(() => {
        if (user && loading) {

            var redirecturl = searchParams.get('redirecturl');
            axios.get(`/vote/check/user/${electionId}/${user.email}`)
            .then(response=>{
                setVoteAvailable(true)
                axios.post("/sendotp", {
                    to: user.email
                })
                    .then(response => {
                        console.log(response.data)
                        setLoading(false)
                          toastPush('Otp Has been sent check your email')
                         
                       
                    })
                    .catch(err=>{
                        toastPush('OTP Send Failed')
                        setLoading(false)
                    })
            
            })
            .catch(err=>{
                   setLoading(false)
                setVoteAvailable(false)
                toastPush('Already Voted!!!')
              
               
                
            })
            if(!loading && !voteAvailable){
                 navigate(redirecturl)
            }

 





 
        }
    }, []);

    const handleOTPChange = (otp) => {
        setConfig((prevConfig) => ({ ...prevConfig, otp }));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setConfig((prevConfig) => ({ ...prevConfig, [name]: value }));
    };

    const handleNumInputsChange = (event) => {
        let numInputs = event.target.valueAsNumber;

        if (numInputs < minLength || numInputs > maxLength) {
            numInputs = 4;

            console.error(`Please enter a value between ${minLength} and ${maxLength}`);
        }

        setConfig((prevConfig) => ({ ...prevConfig, numInputs }));
    };

    const clearOtp = () => {
        setConfig((prevConfig) => ({ ...prevConfig, otp: '' }));
    };
 
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Retrieve a specific query parameter
        const redirecturl = searchParams.get('redirecturl');
     
        if (user) {
            axios.post('/verifyotp', {
                email: user.email,
                otp: otp
            })
                .then(response => {
                    console.log(response.data)


                    let dataInsert = {
                        candidateId: candidateId,
                        useremail: user.email,
                        electionId: electionId

                    }
                    axios.post('/vote/submit/', dataInsert)
                        .then(response => {
                            console.log(response.data)
                             toastPush("Vote Successful")
                             navigate(redirecturl)
                        })
                        .catch(err=>{
                            toastPush("OTP wrong")
                        })

                })
                .catch(err => {
                    console.log(err)
                    toastPush("OTP wrong")
                  
                })
        }


    };
    return (
        <div className="container">
{!loading && !voteAvailable && 

<Navigate to={redirecturl}/>
}
       {
        voteAvailable &&      <div className="view">
        <div className="card">
            <form onSubmit={handleSubmit}>
                <p>Enter verification code</p>
                <div className="margin-top--small">
                    <OTPInput
                        inputStyle="inputStyle"
                        numInputs={numInputs}
                        onChange={handleOTPChange}
                        renderSeparator={<span>{separator}</span>}
                        value={otp}
                        placeholder={placeholder}
                        inputType={inputType}
                        renderInput={(props) => <input {...props} />}
                        shouldAutoFocus
                    />
                </div>
                <div className="btn-row">
                    <button className="btn margin-top--large" type="button" disabled={otp.trim() === ''} onClick={clearOtp}>
                        Clear
                    </button>
                    <button className="btn margin-top--large" disabled={otp.length < numInputs}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
       }
        </div>
    );

}

export default OTPPage;
