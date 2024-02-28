import img from '../photos/creator.jpg'
import '../allcss/Register.css'
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
function AboutUs() {
 

  return (
    <div className='register'>
      <div className="row justify-content-center mx-auto">
        <div className="col-sm-4  ">
          <img src={img} alt="" width="400px"  />
        </div>
        <div className="col-sm-4 my-auto text-white "> 
          <h5>Hi, I am <strong className='text-success'>D Venkat Ramana</strong>, currently pursuing a BTech degree in Information Technology at VNR Vignana Jyothi Institute of Engineering and Technology (VNRVJIET), in my third year.</h5>
        </div>

      </div>
      <div className='text-white ' >
          <h4>Features</h4>
          <ul > <strong className='text-success'>For Normal Users :</strong>
            <li>View schemes available on the website.</li>
            <li>Register for schemes by providing land details.</li>
            <li>Buy land through the website.</li>
            <li>Sell land through the website.</li>

          </ul>
          <ul><strong  className='text-success' >For Admin Users : </strong>
            <li>Verify registered lands for authenticity and legitimacy.</li>
            <li>Post verified land listings on the website.</li>
            <li>Add new schemes to the website for users to register.</li>
          </ul>
      </div>
      <div className='text-white'>
        <h6>Contact Us</h6>
        <p> <SiGmail className='bg-success ' /> Email: <a href="">dyavarivenkat2662@gmail.com</a> </p>
        <p> <BsLinkedin className='bg-primary' /> linkdin : <a href="https://www.linkedin.com/in/venkat-ramana-080194232/">https://www.linkedin.com/in/venkat-ramana-080194232/</a> </p>
      </div>
    </div>
  )
}

export default AboutUs