import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import { ModalTitle } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '../diamond/Diamond.css'
function Dashboard() {

    let [users,setusers]=useState([])
    let [show,setshow]=useState(false)

    let [dataTOEdit,setDataToEdit]=useState({})
    let [err,seterror]=useState('')
    let {register,handleSubmit,formState:{errors},setValue,getValues}=useForm()

    let showModal=()=>setshow(true)
    let closeModal=()=>setshow(false)

    let editdata=(dataObjToBeEdited)=>{
      showModal();
      setDataToEdit(dataObjToBeEdited)
      //fill input details with user data
      setValue("title",dataObjToBeEdited.title);
      setValue("UOM",dataObjToBeEdited.Transaction);
      setValue("owners",dataObjToBeEdited.owners);
      setValue("Area",dataObjToBeEdited.Area);
      setValue("price",dataObjToBeEdited.price);
       setValue("address",dataObjToBeEdited.address);
      setValue("pincode",dataObjToBeEdited.pincode);
      setValue("village",dataObjToBeEdited.village);
      setValue("district",dataObjToBeEdited.district);
       setValue("state",dataObjToBeEdited.state);
       setValue("SuitableCrop",dataObjToBeEdited.SuitableCrop);
      setValue("soilType",dataObjToBeEdited.soilType);
      setValue("TubeWells",dataObjToBeEdited.TubeWells);
      setValue("Roads",dataObjToBeEdited.Roads);
      setValue("image",dataObjToBeEdited.image);
     
    }

    //save data

     let saveData=()=>{
      closeModal();
      let modifiedData=getValues()
      
      //set id
      modifiedData._id=dataTOEdit._id;
      console.log(modifiedData)
      axios.put('http://localhost:3500/land-api/update-land',modifiedData)
      .then(res=>{
        if(res.status===200){
          getData()
        }
      })
      .catch(err=>{
        console.log("err is",err);
        if(err.response){
          seterror(err.message)
        }
        else if(err.request){
          seterror(err.message)
        }
      })
    }

    let getData=()=>{
      axios.get("http://localhost:3500/land-api/getland")
      .then((response)=>{
        if(response.status==200){
          setusers(response.data.payload)
          console.log(response.data.payload)
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
  
      
    },[])



  return (
    <div className='diamond'> 

<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
    {
      users?.map((dataObj)=> <div className='col mx-auto text-center' key={dataObj.id} >
        <div className="card ">
          <img src={dataObj.image} alt="" />
          <div className="card-body bg-transparent ">
                <p><strong>title :</strong>{dataObj.title}</p>
                <p><strong>UOM :</strong>{dataObj.UOM}</p>
                <p><strong>owners :</strong>{dataObj.owners}</p>
                <p><strong>Area :</strong>{dataObj.Area}</p>
                <p><strong>price :</strong>{dataObj.price}</p>
                <p><strong>address :</strong>{dataObj.address}</p>
                <p><strong>pincode :</strong>{dataObj.pincode}</p>
                <p><strong>village :</strong>{dataObj.village}</p>
                <p><strong>district :</strong>{dataObj.district}</p>
                <p><strong>state :</strong>{dataObj.state}</p>
                <p><strong>SuitableCrop :</strong>{dataObj.SuitableCrop}</p>
                <p><strong>soilType :</strong>{dataObj.soilType}</p>
                <p><strong>TubeWells :</strong>{dataObj.TubeWells}</p>
                <p><strong>Roads :</strong>{dataObj.Roads}</p> 
                <button className="btn btn-primary float-start" onClick={()=>editdata(dataObj)}>Edit</button>
          </div>
        </div>

      </div> )


  }
  </div>


        {/*modal */}
  
      <Modal show={show}
       onHide={closeModal}
       backdrop='static'
       >
        <Modal.Header>
         <Modal.Title>
          edit
         </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {/*form to edit */}

         <form  >
           
               {/*Title */}
               <div className="title">
                        <label htmlFor="title">Title</label>
                        <input type="text"
                         id='title'
                         className='form-control mt-3 mb-2'
                         {...register("title")}

                        />
                        

                    </div>
                    {/*Transaction type */}
                    <div className="transaction">
                        <label htmlFor="transaction">Transaction type </label>
                        <select {...register('transaction')} id="transaction" defaultValue='select...' >
                            <option value="rent">rent</option>
                            <option value="lease">lease</option>
                            
                         </select>
 
                       
                        
                    </div>
                    {/*no of owners */}
                    <div className="owners">
                        <label htmlFor="owners">No of Owners</label>
                        <input type="number"
                         id='owners'
                         className='form-control mt-3 mb-2'
                         {...register("owners")}

                        />
                    
                        
                    </div>
                     {/* land area */}
                    <div className="Area">
                        <label htmlFor="Area">Land Area</label>
                        <input type="number"
                         id='Area'
                         className='form-control mt-3 mb-2'
                         {...register("Area" )}

                        />
 
                        
                    </div>
                     {/*UOM area */}
                    <div className="UOM">
                        <label htmlFor="UOM">UOM</label>
                         <select {...register("UOM")}name="UOM" id="UOM" defaultValue='select...'>
                            <option value="Acres">Acres</option>
                            <option value="Bigha">Bigha</option>
                            <option value="Square Yards">Square Yards</option>
                            <option value="Hectare">Hectare</option>
                            <option value="Square Feet">Square Feet</option>
                         </select>
 
                       
                        
                    </div>
                     {/*Expected price*/}
                    <div className="ExpectedPrice">
                        <label htmlFor="Price">Expected Price</label>
                        <input type="number"
                         id='price'
                         className='form-control mt-3 mb-2'
                         {...register("price",{required:"True"})}

                        />
                     
                        
                    </div>
                     {/*Address*/}
                    <div className="address">
                        <label htmlFor="address">Address</label>
                        <input type="address"
                         id='address'
                         className='form-control mt-3 mb-2'
                         {...register("address",{required:"True"})}

                        />
                        
                        
                    </div>
                    
                     {/*pincode*/}
                     <div className="pincode">
                        <label htmlFor="pincode">pincode</label>
                        <input type="number"
                         id='pincode'
                         className='form-control mt-3 mb-2'
                         {...register("pincode",{required:"True"})}

                        />
                      
                        
                    </div>

                    {/*village*/}
                    <div className="village">
                        <label htmlFor="pincode">village</label>
                        <input type="text"
                         id='village'
                         className='form-control mt-3 mb-2'
                         {...register("village",{required:"True"})}

                        />
                       
                        
                    </div>

                    {/*district*/}
                    <div className="district">
                        <label htmlFor="district">distric</label>
                        <input type="text"
                         id='district'
                         className='form-control mt-3 mb-2'
                         {...register("district",{required:"True"})}

                        />
                       
                        
                    </div>

                    {/*state*/}
                    <div className="state">
                        <label htmlFor="state">state</label>
                        <input type="text"
                         id='state'
                         className='form-control mt-3 mb-2'
                         {...register("state",{required:"True"})}

                        />
                      
                        
                    </div>
                     
                    <h3 className='text-success mt-2 mb-2'>Amenities And Crop Details</h3>
                    
                     {/*SuitableCrop*/}
                     <div className="SuitableCrop">
                        <label htmlFor="SuitableCrop">Suitable for Crop</label>
                        <input type="text"
                         id='SuitableCrop'
                         className='form-control mt-3 mb-2'
                         {...register("SuitableCrop",{required:"True"})}

                        />
                       
                        
                    </div>


                     {/*soilType*/}
                     <div className="soilType">
                        <label htmlFor="soilType">soil Type</label>
                        <input type="text"
                         id='soilType'
                         className='form-control mt-3 mb-2'
                         {...register("soilType",{required:"True"})}

                        />
                      
                        
                    </div>

                     {/*TubeWells*/}
                     <div className="TubeWells">
                        <label htmlFor="TubeWells">No of TubeWells</label>
                        <input type="number"
                         id='TubeWells'
                         className='form-control mt-3 mb-2'
                         {...register("TubeWells",{required:"True"})}

                        />
                     
                        
                    </div>

                     {/*Roads*/}
                     <div className="Roads">
                        <label htmlFor="Roads"> No of Roads</label>
                        <input type="number"
                         id='Roads'
                         className='form-control mt-3 mb-2'
                         {...register("Roads",{required:"True"})}

                        />
                        
                        
                    </div>
                     {/*land documents*/}
                     



          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-primary' onClick={saveData} >Save</button>
        </Modal.Footer>
      </Modal>
  

    </div>
  )
}

export default Dashboard