import React, { useContext, useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';
import './FaceCompare.css';
import { AuthContext } from '../../Provider/AuthContextProvider';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const FaceCompare = () => {
    const { electionId, candidateId } = useParams()
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [modelsLoaded, setModelsLoaded] = useState(false);
    const [loading, setLoading] = useState(true);
    const [verifyImage, setVerifyImage] = useState(false);
    const [videoPlay, setvideoPlay] = useState(null);
    const [voteAvailable, setVoteAvailable] = useState(false);
    const { userData, user, toastPush } = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        let video = document.getElementById("facematchvideo")
        if (loading && user && userData  && !voteAvailable ) {
            let profileImage = userData.photoURL
axios.get(`/vote/check/user/${electionId}/${userData.email}`)
.then(response=>{
    setVoteAvailable(true)
    
            
            
        
            console.log(profileImage)
         
            Promise.all([
                faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
                faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
                faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
            ]).then(startWebcam);
})
.catch(err=>{
    setVoteAvailable(false)
    const redirecturl = searchParams.get('redirecturl');
    toastPush('Already Voted!!!')
                   navigate(redirecturl)
})



        

            function startWebcam() {
             
                    navigator.mediaDevices
                    .getUserMedia({
                        video: true,
                        audio: false,
                    })
                    .then((stream) => {
                        video.srcObject = stream;
                        window.localStream = stream;
                    })
                    .catch((error) => {
                        console.error(error);
                    });
              
              
            }


            

            function getLabeledFaceDescriptions() {

                const labels = [profileImage];
                return Promise.all(
                    labels.map(async (label) => {
                        const descriptions = [];
                        for (let i = 1; i <= 2; i++) {
                            const img = await faceapi.fetchImage(`${label}`);
                            const detections = await faceapi
                                .detectSingleFace(img)
                                .withFaceLandmarks()
                                .withFaceDescriptor();
                            descriptions.push(detections.descriptor);

                        }

                        return new faceapi.LabeledFaceDescriptors(label, descriptions);
                    })
                );
            }

            video.addEventListener("play", async () => {
                const labeledFaceDescriptors = await getLabeledFaceDescriptions();

                const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors);
                const canvas = faceapi.createCanvasFromMedia(video);
                document.getElementById("facematch").append(canvas);

                const displaySize = { width: video.width, height: video.height };
                faceapi.matchDimensions(canvas, displaySize);

                const intervalSet = setInterval(async () => {
                    const detections = await faceapi
                        .detectAllFaces(video)
                        .withFaceLandmarks()
                        .withFaceDescriptors();

                    const resizedDetections = faceapi.resizeResults(detections, displaySize);

                    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

                    const results = resizedDetections.map((d) => {
                        return faceMatcher.findBestMatch(d.descriptor);
                    });
                    results.forEach((result, i) => {
                        const box = resizedDetections[i].detection.box;
                        console.log(results)
                        let stateVerify = 'Till Now Not verified'
                        if (result._distance < .5) {
                            stateVerify = 'Verified'
                            setVerifyImage(true)
                            clearInterval(intervalSet)
                            const redirecturl = searchParams.get('redirecturl');
                            localStream.getTracks().forEach(function(track) {
                                track.stop();
                              });
                            video.srcObject = null;
                            setLoading(false)
                            toastPush("Camera verified")
                             navigate(`/vote/otpverify/${electionId}/${candidateId}?redirecturl=${redirecturl}`)
                         } 
                        const drawBox = new faceapi.draw.DrawBox(box, {
                            label:stateVerify,
                        });
                        drawBox.draw(canvas);
                    });
                }, 100);
            });
            setLoading(false)
        }

    }

        , [verifyImage]);





    return (
        <>
            <section className={`${verifyImage?'hidden':''} flex justify-center align-center`}>
                {
                    !verifyImage ?
                     <div id='facematch' className='' style={{ "position": "relative", width: "600px", height: "450px" }}>
                        <video id="facematchvideo" style={{ "position": "absolute" }} width="600" height="450" autoPlay></video>
                    </div>:
                     <div id='facematch' className='hidden' style={{ "position": "relative", width: "600px", height: "450px" }}>
                     <video id="facematchvideo" style={{ "position": "absolute" }} width="600" height="450" autoPlay></video>
                 </div>
                }
            </section>


        </>
    );
}

export default FaceCompare;