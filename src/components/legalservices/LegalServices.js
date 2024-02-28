import React,{useContext} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {loginContext} from '../../contexts/loginContext'
 

function LegalServices() {
   let [currentUser]=useContext(loginContext)

   const activeLink={
    color:"black",
    fontSize:"1.2rem",
    fontWeight:'bold'
  };

  const inactiveLink={
    color:"black",
    fontSize:"1.2rem"
  };


  return (
    <div> 
      

      <ul className='nav justify-content-between bg-black '>
      <li className="nav-item">
            <NavLink className="nav-link  text-white"   to="BankLoan" style={({isActive})=>{
              return isActive ? activeLink :inactiveLink;
            }} >Bank Loan</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link text-white "   to="LegalVerification" style={({isActive})=>{
              return isActive ? activeLink :inactiveLink;
            }} >Legal Verification</NavLink>
          </li>

      </ul>
     
    
      <Outlet/>
      

    </div>
  )
}

export default LegalServices