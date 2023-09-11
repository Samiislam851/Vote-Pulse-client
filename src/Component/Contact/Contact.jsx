import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContextProvider';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { GrMail } from 'react-icons/gr';
import { MdLocationOn } from 'react-icons/md';
import { useSpring, animated } from 'react-spring';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
const Contact = () => {


  const [scrollY, setScrollY] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const handleScroll = () => {
    setScrollY(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateX(-500px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { tension: 200, friction: 100 },
    delay: 100,
    reverse: scrollY < 6000, // Change this value to trigger the animation at a different scroll position
  });
  // Create a spring animation based on scrollY
  const springProps2 = useSpring({
    from: { opacity: 0, transform: 'translateX(-500px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { tension: 180, friction: 100 },
    delay: 100,
    reverse: scrollY < 6000, // Change this value to trigger the animation at a different scroll position
  });
  const springProps3 = useSpring({
    from: { opacity: 0, transform: 'translateX(-1100px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { tension: 120, friction: 100 },
    delay: 100,
    reverse: scrollY < 6000, // Change this value to trigger the animation at a different scroll position
  });
  const springProps4 = useSpring({
    from: { opacity: 0, transform: 'translateY(1700px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 250, friction: 100 },
    delay: 100,
    reverse: scrollY < 6400, // Change this value to trigger the animation at a different scroll position
  });
  const springProps5 = useSpring({
    from: { opacity: 0, transform: 'translateY(1700px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 250, friction: 120 },
    delay: 100,
    reverse: scrollY < 6400, // Change this value to trigger the animation at a different scroll position
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);
    // const message = event.target.message.value;
    // const name = event.target.name.value;
    // const email = event.target.email.value;
    console.log(message, email, name);
    const templateParams = {
      to_email: 'samisiam851@gmail.com', 
      from_name: name,
      from_email: email,
      message: message
    };
    emailjs.sendForm('service_12c4to9', 'template_xdn60zp', event.target, 'MmQFflZM08E-vEmiK', templateParams)
      .then(() => {
        setIsSending(false);
        setIsSent(true);
        setName('');
        setEmail('');
        setMessage('');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your message was sent',
          showConfirmButton: false,
          timer: 2000
        })
      })
      .catch((error) => {
        setIsSending(false);
        console.log('Error sending email:', error);
      });

  }

  const { dark } = useContext(AuthContext)
  return (
    <div className='max-w-[1600px] mx-auto md:px-12 mb-40'>
      <animated.div style={springProps}>
        <h1 className='text-center md:text-7xl text-4xl text-gray-700 my-font font-semibold pb-5'>Contact</h1>
      </animated.div>
      <animated.div style={springProps2}>
        <p className='text-center text-2xl text-gray-500 font-light pb-20 mx-5'>We’re available anytime for your need</p>
      </animated.div>
      <animated.div style={springProps3}>
        <div className='grid grid-cols-1 md:grid-cols-3 md:justify-center md:items-center pb-20'>
          <div className='flex md:justify-center items-center ps-10 pb-10 md:pb-0 md:ps-0 gap-3'>
            <BiSolidPhoneCall className='md:text-7xl text-5xl' />
            <div>
              <h2 className='md:text-3xl text-2xl font-semibold text-gray-800 hover:text-orange-500 cursor-default transition-all duration-300 '>Call Us</h2>
              <h3 className='md:text-xl text-xl text-gray-500 font-light'>+88019418XXXX1</h3>
            </div>
          </div>
          <div className='flex md:justify-center items-center ps-10 pb-10 md:pb-0 md:ps-0 gap-3'>
            <MdLocationOn className='md:text-7xl text-5xl' />
            <div>
              <h2 className='md:text-3xl text-2xl font-semibold text-gray-800 hover:text-orange-500 cursor-default transition-all duration-300 '>Address</h2>
              <h3 className='md:text-xl text-xl text-gray-500 font-light'>260 Quigley Blvd, Ste K</h3>
            </div>
          </div>
          <div className='flex md:justify-center items-center ps-10 pb-10 md:pb-0 md:ps-0 gap-3'>
            <GrMail className='md:text-7xl text-5xl' />
            <div>
              <h2 className='md:text-3xl text-2xl font-semibold text-gray-800 hover:text-orange-500 cursor-default transition-all duration-300 '>Email</h2>
              <h3 className='md:text-xl text-xl text-gray-500 font-light'>Samisiam851@gmail.com</h3>
            </div>
          </div>

        </div>
      </animated.div>
      <animated.div style={springProps4}>
        <div className='border-t-[3px] mt-20 pt-10 pb-20 mx-5'>
          <h1 className={`text-gray-600 md:text-6xl text-4xl my-font md:text-center pt-20 text-center`}>Want to Discuss?</h1>

          <animated.div style={springProps5}>
            <p className='text-center text-gray-400 text-lg md:w-[80%] w-[100%] mx-auto pt-10'>Whether you need assistance with placing an election, have a suggestion to improve our services, or want to explore collaboration opportunities, our dedicated team is ready to help. Feel free to reach out to us and our friendly staff will respond to your message via email. We value your input and look forward to hearing from you!.</p>
          </animated.div>
          <div className="pt-10 mx-auto flex flex-col-reverse md:flex-row items-center md:justify-center">

            <div className="md:basis-[50%] ">

              <div>

                <form onSubmit={handleSubmit} className='flex-col flex gap-5 justify-center items-center ' >
                  <input type="email" name="email" className='input input-bordered w-full md:w-[70%] ' placeholder='Your Email' value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                  <input type="name" name="name" className='input input-bordered w-full md:w-[70%] ' placeholder='Your Name' value={name}
                    onChange={(e) => setName(e.target.value)} />

                  <input type="text" name="message" className='input input-bordered w-full min-h-[150px]  md:w-[70%] ' placeholder='Type Your Message Here' value={message}
                    onChange={(e) => setMessage(e.target.value)} />

                  <button type='submit' className="px-5 text-xl  md:ms-3 py-3 bg-orange-500 text-white rounded-sm md:hover:scale-105 transition-all duration-300  md:float-right w-fit">Let's Talk</button>
                </form>
              </div>
            </div>
            {/* <div className="md:basis-[50%] border">
              {dark ?
                <img src="https://prenohq.com/wp-content/uploads/2022/08/210325-03-24-7-Support-HD-1.gif" className="img-fluid shadow-sm" alt="" />
                :
                <img src="https://ownmyvps.com/images/contact-us/sales.gif" className="img-fluid w-full shadow-sm" alt="" />
              }

            </div> */}
          </div>
        </div>
      </animated.div>

    </div>
  );
};

export default Contact;