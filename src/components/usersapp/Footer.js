import React from 'react'
import '../allcss/Footer.css'
import { BsInstagram } from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { FcLandscape } from "react-icons/fc";
function Footer() {
  return (
    <div className=' footer bg-black text-white '>
      <div className="row   px-3 py-3">
       {/*company logo */}
          <div className="col-sm-3">
            <h2><FcLandscape /> Dream Land</h2>

          </div>
          {/*About Us */}
          <div className="col-sm-3 text-white">we prioritize user satisfaction and uphold integrity in every transaction. Our commitment to transparency and reliability ensures a seamless real estate experience for all users. For inquiries or assistance, reach out to our dedicated support team. Thank you for choosing us as your trusted land transaction partner.</div>
          {/*company*/}
          <div className="col-sm-3"> 
          <ul className='about'>
              <li >About Us</li>
              <li>Careers</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li> Cancellation and Return Policy</li>
              <li>Contact Us</li>

            </ul>
             
          </div>
          {/*follow us on */}
          <div className="col-sm-3">
              <h5>Follow Us On</h5> 
          <ul class="social-icons">
            <li><a href="#"><i class="fa "><BsInstagram/></i></a></li>
            <li><a href="#"><i class="fa "><FiTwitter/></i></a></li>
            <li><a href="#"><i class="fa  "><BsLinkedin/></i></a></li>
           
          </ul>
            
          </div>

      </div> 
        
    </div>
  )
}

export default Footer