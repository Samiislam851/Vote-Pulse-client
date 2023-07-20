import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContextProvider';
import { useContext } from 'react';
import { useEffect } from 'react';
const DashBoard = () => {
    const { registerUser, user, logOut, loginUser, isLogged, setIsLogged , isAdmin, isInstrucor, loading} = useContext(AuthContext);

    const navigate = useNavigate();
    useEffect(() => {
        if( !loading && user ){
             if(isAdmin){
            navigate('/admin')
        }else if(isInstrucor){
            navigate("/instructor")
        }else {
            navigate("/student")
        }
        }
       
 
    }, []);

    return (
        <>
            
        </>
    );
}

export default DashBoard;
