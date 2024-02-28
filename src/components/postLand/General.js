import React,{ useState,useEffect } from 'react'
 
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './General.css'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { loginContext } from '../../contexts/loginContext';


 

function General() {

    
    let [currentUser,loginErr,userLoginStatus,loginUser,logoutUser,setScheme,scheme]=useContext(loginContext)
    let {register,handleSubmit,formState:{errors}}=useForm()
    let navigate=useNavigate()
    let [selectFile,setSelectFile]=useState(null)
    let [err,seterror]=useState("")

    let addLandData=(data1)=>{ 
        axios.post("http://localhost:3500/land-api/add-land",data1)
        .then(response=>{
            console.log("response is",response)
            if(response.status===201){
                navigate("/UserProfile");
             
              
            }
            else{
                seterror(response.data.message)
            }
        })
        .catch((err)=>{
            console.log("err is",err);
            if(err.response){
                seterror(err.message)
            }
            else if(err.request){
                seterror(err.message)
            }
        })
    }

    const onFileSelect=(e)=>{
        setSelectFile(e.target.files[0])
    }

  return (
    <div className='general' >
        {err.length!==0 && <p className='text-danger text-center'>{err}</p> }
        <h2 className='justify-content-center text-center '>Fill The Land Details </h2>
        <div className="row ">
            <div className="col-sm-8 col-xl-10 col-md-6 mx-auto border shadow bg-white mt-5  border-shadow px-4 py-4">
                <form onSubmit={handleSubmit(addLandData)} >
                    {/*Title */}
                    <div className="title">
                        <label htmlFor="title">Title :</label>
                        <input type="text"
                         id='title'
                         className='form-control mt-3 mb-2'
                         {...register("title",{required:"True"})}

                        />
                        {errors.title?.type==='required' && <p className='text-ddanger'>*this field is required</p> }

                    </div>
                    {/*Transaction type */}
                    <div className="transaction">
                        <label htmlFor="transaction">Transaction type : </label>
                        <select {...register('transaction',{required:"True"})} id="transaction" defaultValue='select...' >
                            <option value="rent">rent</option>
                            <option value="lease">lease</option>
                            
                         </select>
 
                        
                        {errors.rent?.type==='required' && <p className='text-danger'>*this field is required</p> }
                        {errors.lease?.type==='required' && <p className='text-danger'>*this field is required</p> }
                        
                    </div>
                    {/*no of owners */}
                    <div className="owners">
                        <label htmlFor="owners">No of Owners :</label>
                        <input type="number"
                         id='owners'
                         className='form-control mt-3 mb-2'
                         {...register("owners",{required:"True"})}

                        />
                        {errors.owners?.type==='required' && <p className='text-ddanger'>*this field is required</p> }
                        
                    </div>
                     {/* land area */}
                    <div className="Area">
                        <label htmlFor="Area">Land Area :</label>
                        <input type="number"
                         id='Area'
                         className='form-control mt-3 mb-2'
                         {...register("Area",{required:"True"})}

                        />
                        {errors.Area?.type==='required' && <p className='text-ddanger'>*this field is required</p> }
                        
                    </div>
                     {/*UOM area */}
                    <div className="UOM">
                        <label htmlFor="UOM">UOM :</label>
                         <select {...register("UOM")}name="UOM" id="UOM" defaultValue='select...'>
                            <option value="Acres">Acres</option>
                            <option value="Bigha">Bigha</option>
                            <option value="Square Yards">Square Yards</option>
                            <option value="Hectare">Hectare</option>
                            <option value="Square Feet">Square Feet</option>
                         </select>
 
                        {errors.UOM?.type==='required' && <p className='text-ddanger'>*this field is required</p> }
                        
                    </div>
                     {/*Expected price*/}
                    <div className="ExpectedPrice">
                        <label htmlFor="Price">Expected Price :</label>
                        <input type="text"
                         id='price'
                         className='form-control mt-3 mb-2'
                         {...register("price",{required:"True"})}

                        />
                        {errors.price?.type==='required' && <p className='text-ddanger'>*this field is required</p> }
                        
                    </div>
                     {/*Address*/}
                    <div className="address">
                        <label htmlFor="address">Address :</label>
                        <input type="address"
                         id='address'
                         className='form-control mt-3 mb-2'
                         {...register("address",{required:"True"})}

                        />
                        {errors.address?.type==='required' && <p className='text-ddanger'>*this field is required</p> }
                        
                    </div>
                    
                     {/*pincode*/}
                     <div className="pincode">
                        <label htmlFor="pincode">pincode :</label>
                        <input type="number"
                         id='pincode'
                         className='form-control mt-3 mb-2'
                         {...register("pincode",{required:"True"})}

                        />
                        {errors.pincode?.type==='required' && <p className='text-ddanger'>*this field is required</p> }
                        
                    </div>

                    {/*village*/}
                    <div className="village">
                        <label htmlFor="pincode">village :</label>
                        <input type="text"
                         id='village'
                         className='form-control mt-3 mb-2'
                         {...register("village",{required:"True"})}

                        />
                        {errors.village?.type==='required' && <p className='text-ddanger'>*this field is required</p> }
                        
                    </div>

                    {/*district*/}
                    <div className="district">
                        <label htmlFor="district">distric :</label>
                        <input type="text"
                         id='district'
                         className='form-control mt-3 mb-2'
                         {...register("district",{required:"True"})}

                        />
                        {errors.district?.type==='required' && <p className='text-ddanger'>*this field is required</p> }
                        
                    </div>

                    {/*state*/}
                    <div className="state">
                        <label htmlFor="state">state :</label>
                        <input type="text"
                         id='state'
                         className='form-control mt-3 mb-2'
                         {...register("state",{required:"True"})}

                        />
                        {errors.state?.type==='required' && <p className='text-ddanger'>*this field is required</p> }
                        
                    </div>
                     
                    <h3 className='text-success mt-2 mb-2'>Amenities And Crop Details</h3>
                    
                     {/*SuitableCrop*/}
                     <div className="SuitableCrop">
                        <label htmlFor="SuitableCrop">Suitable for Crop :</label>
                        <input type="text"
                         id='SuitableCrop'
                         className='form-control mt-3 mb-2'
                         {...register("SuitableCrop",{required:"True"})}

                        />
                        {errors.SuitableCrop?.type==='required' && <p className='text-danger'>*this field is required</p> }
                        
                    </div>


                     {/*soilType*/}
                     <div className="soilType">
                        <label htmlFor="soilType">soil Type :</label>
                        <input type="text"
                         id='soilType'
                         className='form-control mt-3 mb-2'
                         {...register("soilType",{required:"True"})}

                        />
                        {errors.soilType?.type==='required' && <p className='text-danger'>*this field is required</p> }
                        
                    </div>

                     {/*TubeWells*/}
                     <div className="TubeWells">
                        <label htmlFor="TubeWells">No of TubeWells :</label>
                        <input type="number"
                         id='TubeWells'
                         className='form-control mt-3 mb-2'
                         {...register("TubeWells",{required:"True"})}

                        />
                        {errors.TubeWells?.type==='required' && <p className='text-danger'>*this field is required</p> }
                        
                    </div>

                     {/*Roads*/}
                     <div className="Roads">
                        <label htmlFor="Roads"> No of Roads :</label>
                        <input type="number"
                         id='Roads'
                         className='form-control mt-3 mb-2'
                         {...register("Roads",{required:"True"})}

                        />
                        {errors.Roads?.type==='required' && <p className='text-danger'>*this field is required</p> }
                        
                    </div>
                     {/*land documents*/}
                    <div>
                    <label htmlFor="name">upload land images :</label>
                        <input type="file"
                        id='image'
                        placeholder='url'
                        className='form-control mt-3'
                        {...register("image",{required:'True'})}
                        onInput={onFileSelect}
                        />
                        {errors.image?.type==='required' && <p className='text-danger'>*this field is required</p>}
                    </div>

                     <button className="btn btn-danger text-center mx-auto" type='submit'>Save</button>

 
                </form>
            </div>
        </div>

 

    </div>
  )
}

export default General