import React from 'react'
import {BiPhoneCall} from 'react-icons/bi'
import {CiLocationOn} from 'react-icons/ci'
import { useForm } from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';
import { ModalTitle } from 'react-bootstrap';
import './Data.css'
import { useState } from 'react';
const Data = ({price,title,address,SuitableCrop,phone,image1,image2,image3})=> {

  let {register,handleSubmit,formState:{errors},setValue,getValues}=useForm()
  let [show,setshow]=useState(false)

  let showModal=()=>setshow(true)
  let closeModal=()=>setshow(false)

  let editdata=()=>{
    showModal();
    setValue("name");
    setValue("phone no")
    
  }

  let savedata=()=>{
    closeModal();
  }




  return (
    <div >
         <div className="row     justify-content-center   mt-4 ">
          <div className="col-8 border content px-3 py-3">
            <div className="row justify-content-center mx-auto">
            <div className="col-sm-6">
            <div id="carouselExampleSlidesOnly" className="carousel slide " data-bs-ride='carousel' >
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="1000">
                    <img src={image1} className="d-block w-100" height='275px' alt="..."/>
                  </div>
                  <div className="carousel-item" data-bs-interval="1000">
                    <img src={image2} className="d-block w-100" height='275px' alt="..." />
                  </div>
                  <div className="carousel-item" data-bs-interval="1000">
                    <img src={image3} className="d-block w-100" height='275px' alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>


           </div>
            </div>
            <div className="col-sm-6   bg-light">
               <h4 className=' text-danger d-inline' >{price}</h4>
               <p  className='text-black-50'> <b> {title}</b> </p> 
               <p><CiLocationOn/> {address}</p>
               <p>{SuitableCrop}</p>
               <button className="btn btn-success float-start" onClick={()=>editdata()}><BiPhoneCall/> Request Call</button>
               <Modal show={show}
                    onHide={closeModal}
                    backdrop='static'
                    
                    >
                      <Modal.Header>
                      <Modal.Title>
                        Request a Call back
                      </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className='bg-light'>
                      {/*form to edit */}

                      <form className='px-2 py-2'>
                          
                          <input type="text"
                          placeholder='name'
                          id='name'
                          className='form-control  mt-3 mb-3 rounded-pill'
                          {...register("name")}
                          />

                          <input type="tel"
                          placeholder='phone no'
                          id='phoneno'
                          className='form-control  mt-3 mb-3  rounded-pill'
                          {...register("phoneno")}
                          />

                          <input type="email"
                          placeholder='Email'
                          id='Email'
                          className='form-control  mt-3 mb-3  rounded-pill'
                          {...register("Email")}
                          />
                          

                           
                        <textarea name="message" placeholder='message' id="" cols="50" rows="10"></textarea>
                          

                        
                          
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <button className='btn btn-primary' onClick={savedata}  >Save</button>
                      </Modal.Footer>
                    </Modal>



            </div>
            </div>
          </div>
         </div>

    </div>
    
  )
}

export default Data