import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthContextProvider';

const Contact = () => {
  const{dark }= useContext(AuthContext)
  return (
    <div>
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
       
        <div className="w-[90%] md:w-[50%] md:text-right  p-3">
          <h1 className={`${dark?'text-gray-200':'text-gray-800'} md:text-7xl text-4xl  font-semibold md:text-right`}>Contact With Us</h1>
          <p className={ `${dark?'text-gray-200':'text-gray-500'} text-lg md:ps-3 py-4`}>We are here to assist you with any inquiries, feedback, or business opportunities related to our music bootcamp and courses. Our dedicated team is ready to help answer any questions you may have. Whether you need assistance with course selection, have suggestions to improve our offerings, or want to discuss partnership opportunities, we value your input and are eager to hear from you.
            <br /> <br />

            Please feel free to reach out to us using the contact information provided below. Our friendly staff is committed to providing prompt responses and ensuring your needs are addressed.</p>
          <button className="px-3 md:ms-3 py-2 bg-gradient-to-r from-blue-900  to-blue-700 text-white rounded-md  font-semibold md:float-right">Contact now</button>
        </div>
        <div className="md:w-1/2">
          {dark?
          <img src="https://prenohq.com/wp-content/uploads/2022/08/210325-03-24-7-Support-HD-1.gif" className="img-fluid shadow-sm"  alt="" />
          :
          <img src="https://ownmyvps.com/images/contact-us/sales.gif" className="img-fluid w-full shadow-sm" alt="" />
          }
     
        </div>
      </div>

    </div>
  );
};

export default Contact;