import React,{useState} from 'react'
import '../allcss/Register.css'
import {useForm} from 'react-hook-form'
import {  useNavigate} from 'react-router-dom'
import axios from 'axios' 
function Register() {
   
  let {register,handleSubmit,formState:{errors}}=useForm()
  let navigate=useNavigate()
  let [err,seterror]=useState("")
  let [selectedFile,setSelectedFile]=useState(null) 
let addnewuser=(newuser)=>{

  //make http post req to save newuser to localapi
  let fd=new FormData();
  //append newuser to form data
  fd.append("user",JSON.stringify(newuser))
  //append slelected file to form data
  fd.append("photo",selectedFile)
  // console.log(newuser);
  //save user info
  axios.post("http://localhost:3500/user-api/register",fd)
  .then(response=>{
    console.log("response is ",response)
    if(response.status===201){
      //navigate('/Users');
      navigate('/Login')
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

    //on file selelct
    const onFileSelect=(e)=>{
      setSelectedFile(e.target.files[0])
    }

  return (
    <div className='register'> 
       
      {err.length!==0 && <p className='text-danger'>{err}</p>}

      
      <div className='  mb-3 mx-auto text-center justify-content-center' >
            <img src="https://media.istockphoto.com/id/1333123192/photo/close-up-photo-of-female-farmers-hands-using-laptop-next-to-combine-harvester-machine.jpg?s=612x612&w=0&k=20&c=KItVw0SBK8INIBSEUphnhq3PvlKk4FBLDeh6n81v-5c=" className='logo '   alt="" />
            <h5 className='mx-auto text-center justify-content-center mt-3 text-white'>"Farming is not just a JOB.It is a way of LIFE" <br /> Our mission is to simplify the digital agriculture for <br />famers in rural india </h5>
      </div>
      <div className="row">
       
            <div className="col-sm-8 col-11 col-md-6 mx-auto border text-white px-4 py-4 ">
                <form onSubmit={handleSubmit(addnewuser)}>
                <h3 className='float-left'>Farmer Registration</h3>
                  <label htmlFor="username">username</label>
                  <input type="text"
                  id='username'
                  placeholder='username'
                  className='form-control  mt-3 mb-3'
                  {...register("username",{required:'True'})}
                  />
                  {errors.username?.type==='required' && <p className='text-danger'>*this field is required</p>}
                

                  <label htmlFor="email">email</label>
                  <input type="text"
                  id='email'
                  placeholder='@gmail.com'
                  className='form-control mt-3 mb-3'
                  {...register("email",{required:'True'})}
                  />
                  {errors.username?.type==='required' && <p className='text-danger'>*this field is required</p>}


                  <label htmlFor="password">password</label>
                  <input type="password"
                  id='password'
                  placeholder='password'
                  className='form-control mt-3'
                  {...register("password",{required:'True'})}
                  />
                  {errors.username?.type==='required' && <p className='text-danger'>*this field is required</p>}
                  
                  
                  <label htmlFor="dateofbirth">date of Birth</label>
                  <input type="date"
                  id='dob'
                  className='form-control mt-3'
                  {...register("dateofbirth",{required:'True'})}
                  />
                  {errors.dateofbirth?.type==='required' && <p className='text-danger'>*this field is required</p>}
                
                
                  <label htmlFor="name">upload pro pic</label>
                  <input type="file"
                  id='image'
                  placeholder='url'
                  className='form-control mt-3'
                  {...register("image",{required:'True'})}
                  onInput={onFileSelect}
                  />
                  {errors.imageUrl?.type==='required' && <p className='text-danger'>*this field is required</p>}
                
                  
                  <label htmlFor='userType'>choose user type</label>
                  <select className='form-select mt-3' name="cars" id="userType" {...register("userType",{required:'True'})}>
                      <option value="choose default" selected disabled>choose user type</option>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                  </select>
                  {errors.userType?.type==='required' && <p className='text-danger'>*this field is required</p>}
                  <button className='btn btn-danger mt-3' type='submit'>Register</button>
                </form>
              </div>
 
      </div>
    </div>
  )
}

export default Register