import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 
import '../diamond/Diamond.css'
function AddScheme() {
let {register,handleSubmit,formState:{errors}}=useForm()
let [err,seterror]=useState("")
let [selectedFile,setSelectedFile]=useState(null) 
let navigate=useNavigate()
let addEvent=(newEvent)=>{
   
  axios.post("http://localhost:3500/scheme-api/add-scheme",newEvent)
  .then(response=>{ 
    console.log("response is ",response)
    if(response.status===201){
      navigate('/');
       
    }
    else{
      seterror(response.data.message)
    }
     
  })
  .catch((err)=>{
    console.log("err is", err);
    if(err.response){
     seterror(err.message)
    }
    else if(err.request){
      seterror(err.message)
    }
  })

}

 

 
  return (
    <div className='diamond '> 
     <div>
      <h2 className="  text-center text-success ">Add Scheme</h2>
      {err.length!==0 && <p className='text-danger mx-auto text-center'>{err}</p>}
      <div className="row">
        <div className="col-sm-8 col-11 col-md-6 mx-auto border px-3 py-3 shadow bg-light mt-2">
          <form onSubmit={handleSubmit(addEvent)}>
            <label htmlFor="username"> Name :</label>
            <input type="text"
             id='Eventname'
             placeholder='scheme Name'
             className='form-control  mt-3 mb-3'
             {...register("SchemeName",{required:'True'})}
            />
             {errors.SchemeName?.type==='required' && <p className='text-danger'>*this field is required</p>}
            

             <label htmlFor="username">Scheme description :</label>
            <input type="text"
             id='Eventname'
             placeholder='describe atleast 100 words'
             className='form-control  mt-3 mb-3'
             {...register("Schemedescription",{required:'True'})}
            />
             {errors.Schemedescription?.type==='required' && <p className='text-danger'>*this field is required</p>}
            
            
           
            <label htmlFor="name" className='mt-3'>upload pro pic :</label>
            <input type="url"
            id='image'
             placeholder='url'
             className='form-control mt-3'
             {...register("image",{required:'True'})} 
            />
            {errors.imageUrl?.type==='required' && <p className='text-danger'>*this field is required</p>}
            <button className='btn btn-danger mt-3'    type='submit'>Add</button>
             
          </form>
        </div>
      </div>
      </div>



    </div>
  )
}

export default AddScheme