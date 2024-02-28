import React,{useContext,useEffect,useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {loginContext} from '../../contexts/loginContext'
import './Userprofile.css'
import '../diamond/Diamond.css'
import axios from 'axios'

function Userprofile() {
 
   let [currentUser]=useContext(loginContext)
   let [users,setusers]=useState([])
   let [err,seterror]=useState('')
   let [post,setPost]=useState([])


   const activeLink={
    color:"black",
    fontSize:"1.2rem",
    fontWeight:'bold'
  };

  const inactiveLink={
    color:"black", 
    fontSize:"1.2rem"
  };

  let getData=()=>{
    axios.get("http://localhost:3500/regScheme-api/get-land")
    .then((response)=>{
     console.log(response)
      if(response.status==200){
        response=(response.data.payload)
        console.log(response)
        console.log(response,currentUser)
        response=response.filter(obj=>obj.currentUser==currentUser.username)
        setusers(response)
        console.log(response)
      }
    })
    .catch((err)=>{
      console.log("err is at getdata dashboard",err)
      if(err.response){
        seterror(err.message)
      }
      else if(err.request){
        seterror(err.message)
      }
    })
  } 

  let getPost=()=>{
    axios.get("http://localhost:3500/land-api/get-land")
    .then((response)=>{
     console.log(response)
      if(response.status==200){
        response=(response.data.payload) 
        setPost(response)
        console.log(response)
      }
    })
    .catch((err)=>{
      console.log("err is at getdata dashboard",err)
      if(err.response){
        seterror(err.message)
      }
      else if(err.request){
        seterror(err.message)
      }
    })
  } 
  //delete land data
  useEffect(()=>{
  getData();
  getPost();


    
  },[])


  return (
    <div className='diamond'>       
      <div className="row justify-content-center  ">
        <h2 className='text-center mb-5 text-white mt-3'>{currentUser.userType} profile</h2>
            <div className="col-4 border border-black px-2 py-2 bg-secondary text-white justify-content-center text-center shadow border-shadow ">
                  <img src={currentUser.image} className='border-square mt-3 mb-3 shadow-sm' width='250px' alt="" />
                  <h4 className='mt-3 text-black'>username : {currentUser.username}</h4>
                  <p className='mt-3'>email :{currentUser.email}</p>
                  <p className='mt-3'>dateofbirth :{currentUser.dateofbirth}</p>
 
            </div>
      </div>
      
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
    {
      users?.map((dataObj)=> <div className='col mx-auto text-center m-5 p-3' key={dataObj.id} >
        <div className="card ">
          <img src={dataObj.schemeimage} alt="" />
          <div className="card-body bg-transparent "> 
          <h4><strong className='text-success'>Scheme Name :</strong>{dataObj.schemeName}</h4>
                <p><strong>UOM :</strong>{dataObj.UOM}</p>
                <p><strong>owners :</strong>{dataObj.owners}</p>
                <p><strong>Area :</strong>{dataObj.Area}</p> 
                <p><strong>address :</strong>{dataObj.address}</p>
                <p><strong>pincode :</strong>{dataObj.pincode}</p>
                <p><strong>village :</strong>{dataObj.village}</p>
                <p><strong>district :</strong>{dataObj.district}</p>
                <p><strong>state :</strong>{dataObj.state}</p>
                <p><strong>SuitableCrop :</strong>{dataObj.SuitableCrop}</p>   
               
                <button className="btn btn-primary float-start" >Edit</button>
          </div>
        </div>

      </div> )


  }
 
  </div>
  {
    currentUser.userType=='user'?
    (
      <div></div>

    ):(
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      {
        users?.map((dataObj)=> <div className='col mx-auto text-center m-5 p-3' key={dataObj.id} >
          <div className="card ">
            <img src={dataObj.schemeimage} alt="" />
            <div className="card-body bg-transparent "> 
            <h4><strong className='text-success'>Scheme Name :</strong>{dataObj.schemeName}</h4>
                  <p><strong>UOM :</strong>{dataObj.UOM}</p>
                  <p><strong>owners :</strong>{dataObj.owners}</p>
                  <p><strong>Area :</strong>{dataObj.Area}</p> 
                  <p><strong>address :</strong>{dataObj.address}</p>
                  <p><strong>pincode :</strong>{dataObj.pincode}</p>
                  <p><strong>village :</strong>{dataObj.village}</p>
                  <p><strong>district :</strong>{dataObj.district}</p>
                  <p><strong>state :</strong>{dataObj.state}</p>
                  <p><strong>SuitableCrop :</strong>{dataObj.SuitableCrop}</p>   
                 
                  <button className="btn btn-primary float-start" >Edit</button>
            </div>
          </div>
  
        </div> )
  
  
    }
   
    </div>

    )

  }


 
     
    </div>
  )
}

export default Userprofile