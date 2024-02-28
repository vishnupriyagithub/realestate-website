import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './PostLand.css'
import { Outlet, useNavigate } from 'react-router-dom';
import { loginContext } from '../../contexts/loginContext';



function PostLand() {
  let [currentUser,loginErr,userLoginStatus,loginUser,logoutUser,setScheme]=useContext(loginContext)
  const [err, setErr] = useState('');
  const [users, setUsers] = useState([]); 
let navigate=useNavigate();
  

  useEffect(() => {
    axios.get('http://localhost:3500/scheme-api/get-scheme')
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data.payload)
          setUsers(response.data.payload); // <-- Issue might be here
        }
      })
      .catch((err) => {
        console.log('err is', err);
        setErr(err.message);
      });
  }, []);
  
 const addLand=(data)=>{
  setScheme(data)
  console.log(data)
  navigate("/RegScheme");
 }
  

 

  return (
    <div className="post">
    <div className='container'>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 justify-content-center cards">
        {users?.map((userObj) => (
          <div className="col mt-3  " key={userObj.id}>
            <div className="card border bg-opacity-75">
            <img src={userObj.image} className="mx-auto  profile-image" alt="" height='200px' />
              <div className="card-body  bg-opacity-50 card-decoration ">
                <p className=" name "><b className='text-dark'>Scheme Name:</b> {userObj.SchemeName}</p> 
                <p className=" name "><b className='text-dark'>Scheme Description:</b> {userObj.Schemedescription}</p> 
                <button className='btn btn-outline-primary' onClick={()=>addLand(userObj)}>Register</button>
                
              </div>
            </div>
          </div>
        ))}
    </div>
    
    </div>
    </div>
  );
}

export default PostLand;