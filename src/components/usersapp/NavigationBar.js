import React,{useContext} from 'react'
import '../allcss/NavigationBar.css'
import { NavLink } from 'react-router-dom'
import { loginContext } from '../../contexts/loginContext';
import {AiFillWindows, AiOutlineUser} from 'react-icons/ai'
import {FcLandscape} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';
function NavigationBar() {


   
  let [currentUser,loginErr,userLoginStatus,loginUser,logoutUser]=useContext(loginContext)
 let navigate=useNavigate();
  const activeLink={
    color:"#ffaa00",
    fontSize:"1.2rem",
    fontWeight:'bold'
  };

  const inactiveLink={
    color:"#EEF02",
    fontSize:"1.2rem"
  };
  const goHome=()=>{
    navigate('/')
  }
  const buy=()=>{
    navigate("/")
  }

 

  return (
    <nav className='navbar navbar-expand-sm  bg-black'>
    <div className="container-fluid">
    <button className="glow-on-hover text-bold" type="button" onClick={()=>goHome()}> <FcLandscape/>  DREAM LAND</button>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse  " id="navbarSupportedContent">
        {currentUser.userType==='admin'?
        (<ul className="navbar-nav ms-auto flex flex-row mb-2 mb-lg-0  ">

        <li className="nav-item">
            <NavLink className="nav-link text-white glow-on-hover"   to="/addScheme" style={({isActive})=>{
              return isActive ? activeLink :inactiveLink;
            }} >Add scheme</NavLink>
          </li>
          


        
          <li className="nav-item">
            <NavLink className="nav-link text-white glow-on-hover"   to="/LandDetailsPost"  style={({isActive})=>{
              return isActive ? activeLink :inactiveLink;
            }}  >Add Land</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link text-white glow-on-hover "   to="/UserProfile"  style={({isActive})=>{
              return isActive ? activeLink :inactiveLink;
            }}  ><AiOutlineUser/>  {currentUser.username}</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white glow-on-hover "   to="/Login"  style={({isActive})=>{
              return isActive ? activeLink :inactiveLink;
            }}  
            onClick={logoutUser}
            >LogOut</NavLink>
          </li> 
          </ul> ):currentUser.userType==="user"?(
            <ul className="navbar-nav ms-auto   mb-2 mb-lg-0 ">
              <li className="nav-item">
            <NavLink className="nav-link text-white glow-on-hover "   to="/"  style={({isActive})=>{
              return isActive ? activeLink :inactiveLink;
            }}   
            >Home</NavLink>
          </li> 
             
          <li className="nav-item">
            <NavLink className="nav-link text-white glow-on-hover "   to="/LandData"  style={({isActive})=>{
              return isActive ? activeLink :inactiveLink;
            }}   
            >Buy Land</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white glow-on-hover "   to="/General"  style={({isActive})=>{
              return isActive ? activeLink :inactiveLink;
            }}   
            >Post Land</NavLink>
          </li> 
          <li className="nav-item">
            <NavLink className="nav-link text-white glow-on-hover "   to="/UserProfile"  style={({isActive})=>{
              return isActive ? activeLink :inactiveLink;
            }}  ><AiOutlineUser/>  {currentUser.username}</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white glow-on-hover "   to="/Login"  style={({isActive})=>{
              return isActive ? activeLink :inactiveLink;
            }}  
            onClick={logoutUser}
            >LogOut</NavLink>
          </li> 
          <li className="nav-item">
            <NavLink className="nav-link text-white glow-on-hover"   to="/AboutUs"  style={({isActive})=>{
              return isActive ? activeLink :inactiveLink;
            }}  >About Us</NavLink>
          </li>
            </ul>
          ):(
            <ul className="navbar-nav ms-auto   mb-2 mb-lg-0 ">
              <li className="nav-item">
            <NavLink className="nav-link text-white glow-on-hover "   to="/Login"  style={({isActive})=>{
              return isActive ? activeLink :inactiveLink;
            }}  >Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white glow-on-hover "   to="/Register"  style={({isActive})=>{
              return isActive ? activeLink :inactiveLink;
            }}  >Register</NavLink>
          </li> 
            </ul>
          )
          }
          

           
        
      </div>
    </div>
  </nav>
  )
}

export default NavigationBar
