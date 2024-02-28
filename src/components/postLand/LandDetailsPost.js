import React,{ useState,useEffect } from 'react'
 
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 
import '../diamond/Diamond.css'
 

function LandDetailsPost() {

 
    let {register,handleSubmit,formState:{errors}}=useForm()
    let navigate=useNavigate() 
    let [err,seterror]=useState("")

    let addLandData = (data1) => {
        console.log(data1)
        axios.post("http://localhost:3500/details-api/add-land", data1)
          .then((response) => {
            console.log("response is", response);
            if (response.status === 201) {
              navigate("/");
            } else {
              seterror(response.data.message);
            }
          })
          .catch((err) => {
            console.log("err is", err);
            if (err.response) {
              seterror(err.response.data.message);
            } else {
              seterror(err.message);
            }
          });
      };
      

    

  return (
    <div className='diamond ' >
        {err.length!==0 && <p className='text-danger text-center'>{err}</p> }
        <h2 className='text-center text-success mb-5'>Add Land Details</h2>
        <div className="row">
            <div className="col-sm-8 col-xl-5 bg-light col-md-6 mx-auto border  border-shadow px-4 py-4">
                <form onSubmit={handleSubmit(addLandData)}  >
                    
                     {/*Expected price*/}
                     <div className="ExpectedPrice">
                        <label htmlFor="Price">Expected Price</label>
                        <input type="text"
                         id='price'
                         placeholder='e.g 50 Lacs'
                         className='form-control mt-3 mb-2'
                         {...register("price",{required:"True"})}

                        />
                        {errors.price?.type==='required' && <p className='text-danger'>*this field is required</p> }
                        
                    </div>

                    {/*Title */}
                    <div className="title">
                        <label htmlFor="title">Title</label>
                        <input type="text"
                         id='title'
                         placeholder='e.g land For Sale'
                         className='form-control mt-3 mb-2'
                         {...register("title",{required:"True"})}

                        />
                        {errors.title?.type==='required' && <p className='text-danger'>*this field is required</p> }

                    </div>

                     {/*Address*/}
                     <div className="address">
                        <label htmlFor="address">Address</label>
                        <input type="address"
                         id='address'
                         placeholder='e.g hyderabad '
                         className='form-control mt-3 mb-2'
                         {...register("address",{required:"True"})}

                        />
                        {errors.address?.type==='required' && <p className='text-danger'>*this field is required</p> }
                        
                    </div>


                  {/*SuitableCrop*/}
                  <div className="SuitableCrop">
                        <label htmlFor="SuitableCrop">Suitable for Crop</label>
                        <input type="text"
                         id='SuitableCrop'
                         placeholder='e.g wheat'
                         className='form-control mt-3 mb-2'
                         {...register("SuitableCrop",{required:"True"})}

                        />
                        {errors.SuitableCrop?.type==='required' && <p className='text-danger'>*this field is required</p> }
                        
                    </div>


                    {/*Phone */}
                    <div className="Phone">
                        <label htmlFor="Phone">Phone</label>
                        <input type="tel"
                         id='Phone'
                         placeholder='xxxxxx'
                         className='form-control mt-3 mb-2'
                         {...register("Phone",{required:"True"})}

                        />
                        {errors.Phone?.type==='required' && <p className='text-danger'>*this field is required</p> }

                    </div>
                    
                    
                    
                    
                   
                   

 
 
 
                     {/*land documents*/}
                    <div>
                    <label htmlFor="name">upload land images</label>
                        <input type="url"
                        id='image1'
                        placeholder='url1'
                        className='form-control mt-3'
                        {...register("image1",{required:'True'})} 
                        />
                        {errors.image1?.type==='required' && <p className='text-danger'>*this field is required</p>}
                    </div>

                     {/*land documents*/}
                     <div>
                    <label htmlFor="name">upload land images</label>
                        <input type="url"
                        id='image2'
                        placeholder='url2'
                        className='form-control mt-3'
                        {...register("image2",{required:'True'})} 
                        />
                        {errors.image2?.type==='required' && <p className='text-danger'>*this field is required</p>}
                    </div>

                     {/*land documents*/}
                     <div>
                    <label htmlFor="name">upload land images</label>
                        <input type="url"
                        id='image3'
                        placeholder='url3'
                        className='form-control mt-3'
                        {...register("image3",{required:'True'})} 
                        />
                        {errors.image3?.type==='required' && <p className='text-danger'>*this field is required</p>}
                    </div>

                     <button className="btn btn-danger text-center mx-auto" type='submit'>Add</button>

 
                </form>
            </div>
        </div>




    </div>
  )
}

export default LandDetailsPost