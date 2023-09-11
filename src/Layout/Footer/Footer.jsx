import React from 'react';
import { FiMusic } from 'react-icons/fi'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>

      <footer className="bg-[#00263A]  text-white mx-auto  p-4">
        <div className=" mx-auto py-20 border-b-[3px] border-[#a1a1a1]">
          <div className="grid grid-cols-1 md:grid-cols-2 h-fit md:ps-28 r lg:grid-cols-4 gap-4  justify-center">
            {/* Column 1 */}
            <div className="mb-4">
              <h1 className='h-8 my-font w-auto sm:h-10 font-sans text-orange-500 text-3xl transition-all ease-in-out duration-700 font-semibold flex mb-3 gap-2 text-start  '> <span className='text-gray-200'>Vote</span> Pulse </h1>
              <ul className='text-base text-gray-300 ps-1  flex flex-col gap-2 font-normal '>
                <Link to='#'>Elections</Link>
                <Link to='#'>Meeting Votes</Link>
                <Link to='#'>Features</Link>
                <Link to='#'>Ballot Samples</Link>
                <Link to='#'>Reviews</Link>
                <Link to='#'>Services</Link>
                <Link to='#'>Partner Programs</Link>
                <Link to='#'>Pricing</Link>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-white mb-2">Resources</h2>
              <ul className='text-base text-gray-300 ps-  flex flex-col gap-2 font-normal '>
                <Link to='#'>How to Vote / Voting Help</Link>
                <Link to='#'>Tips Sheets and Guides</Link>
                <Link to='#'>Voting Systems Explained</Link>
                <Link to='#'>Announcements and Election Notice</Link>
                <Link to='#'>Election Audits and Observability</Link>
                <Link to='#'>How to Run Online Elections</Link>
                <Link to='#'>Combining Board Nominations with Elections</Link>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-white mb-2">Industries</h2>
              <ul className='text-base text-gray-300 ps-  flex flex-col gap-2 font-normal '>
                <Link to='#'>Professional Associations</Link>
                <Link to='#'>Industry Associations</Link>
                <Link to='#'>Homeowners Associations</Link>
                <Link to='#'>Other Associations or Non-Profits (NGOs Societies or Clubs)</Link>
                <Link to='#'>Golf Clubs, Country Clubs and Sport Facilities</Link>
                <Link to='#'>Service Providers</Link>
                <Link to='#'>Other Organizations</Link>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-white mb-2">Company</h2>
              <ul className='text-base text-gray-300 ps-  flex flex-col gap-2 font-normal '>
                <Link to='#'>Contact Us</Link>
                <Link to='#'>About Us</Link>
                <Link to='#'>Support</Link>
                <Link to='#'>Careers</Link>
                <Link to='#'>Blog</Link>
              </ul>
            </div>
          </div>
        </div>
        <div className='max-w-[1600px] md:px-12 mx-auto flex flex-col-reverse gap-10 md:flex-row py-12 '>
          <div className='basis-[33%] text-lg text-white text-center'>© 2023 VotePulse, Inc. All Rights Reserved</div>
          <ul className='flex md:flex-row flex-col basis-[33%] justify-center items-center gap-10 text-gray-300'>
            <Link to='#'><a href="#">Terms of Service</a></Link>
            <Link to='#'><a href="#">Privacy Policy</a></Link>
            <Link to='#'><a href="#">Security</a></Link>
            <Link to='#'><a href="#">Sitemap</a></Link>
          </ul>
          <ul className='basis-[33%] flex justify-center gap-10 '>
             <Link to='#'><FaFacebook className='inline scale-150'/></Link>
             <Link to='#'><FaTwitter className='inline scale-150'/></Link>
             <Link to='#'><FaInstagram  className='inline scale-150'/></Link>
          </ul>
        </div>
        <div>
     
        </div>
      </footer>
    </>
  );
}

export default Footer;
