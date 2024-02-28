 
import React from 'react'
import './BankLoan.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useForm} from 'react-hook-form'
import Accordion from './Accordion';

function LegalVerification() {

  const accordionData = [
    {
      title: 'What is Legal Verification?',
      content: `It is the process to verify that the property is free from any kind of legal obligations and confirming the right ownership of the property to avoid future problems in sale purchase. The most integral part of it is the legal title check.` 
    },
    {
      title: 'What Role can a Legal Expert Play?',
      content: `A legal expert performs explicit research about the property and gathers all the information required for the benefit of the buyer. They are responsible for searching & verifying titles, examining real estate records, and compiling a list of mortgages, contracts, and more. Hence, they ensure that no fingers can be pointed at the property due to any kind of legal obligations.`
    },
    {
      title: 'When should you opt for Legal Services?',
      content: `Implementing a legal verification process becomes a key factor when you are planning to buy agricultural land. Before you buy a property, ensure that it is free from any kind of legal frays or that its title is free of any claims, liens, or other issues that may put you down in future distress`
    },
    {
      title: 'What areas are covered in the Legal Verification Process?',
      content: `A legal verification provides you with a report that reveals all the information related to property taxes, issues with deed documentation (if any), unresolved ownership claims, and whether the current owner has the right to sell the property legally or not?`
    },
    {
      title: 'What is the Process of Legal Verification & how long does it take?',
      content: `A legal verification process is conducted by a legal advisor who checks the previous records and the current status of the property whether it is mortgaged or free from any claims. Not only this, but it also determines whether the current seller has the complete right to sell the property or not. This whole process takes up to a week.`
    },
    {
      title: 'What are the key benefits of Farmland Title Deed checks?',
      content: `A Title Deed is the most important document as far as property ownership is concerned. It is a legal document that confirms or proves that one is the owner of a property after having been transferred into one's name. Thus it is very important to get the land title checked.`
    },
    {
      title: 'What are the documents that are verified under the Legal Verification process?',
      content: ` There are various documents that the experts verify during the verification process. Some of the most common documents include:

      1.Agreement to Sell
      2.Conveyance Deed
      3.Power of Attorney
      4.Will
      5.Relinquishment Deed
      6.Partition Deed
      7.Mutation Details`
    },
    {
      title: 'What are the Documents you must have before Selling your Property?',
      content: `Details such as original title deed, previous deeds, house tax receipts, and two witnesses for registration of the property, should be provided in the document. A sale deed is a document that transfers the title of the property, from the seller to the buyer.`
    },
    {
      title: 'Do different states have different Agri-land Laws?',
      content: `Yes, all the states in India have different agri-land laws which are taken care of by the state governments of the respective areas.`
    },
    {
      title: 'Is hiring an expert for Legal Verification necessary?',
      content: `It is not a compulsion to hire a legal expert for verification before buying land but it is beneficial and recommended to do so to avoid any frauds in the future.`
    }

  ];

 
  let {register,handleSubmit,formState:{errors}}=useForm()


  return (
    <div className='main'> 
          {/*fixed image */}

          <div className="mainimage">
            <div className="row imageanddata">
              <div className="col-7">
            <img src="https://st2.depositphotos.com/15795830/48181/i/600/depositphotos_481819760-stock-photo-farmer-holding-money-bag-background.jpg " className='image px-2 py-2'    alt="" />
             </div>
              <div className="col-5">

              </div>
            </div>
          </div>
      <div className="container">
          <div className='content mt-4 '>
            <h3 className='text-center '>How does it work?</h3>
                <div className="row ">
                  <div className="col-sm-3"  >
                    <div className="card ">
                      <img src="https://cloudfarms.in/assets/images/legal-how-does-it-work/registration.png" className='float-left' height='70px' width='90px' alt="" />
                        <div className="card-body" >
                             <h4>1.Registration</h4>
                            <p>Fill in the required details mentioned in the inquiry form to let us know about your query and the type of legal service you are looking for.</p>
                        </div>
                    </div>

                  </div>

                  <div className="col-sm-3" >
                    <div className="card" >
                      <img src="https://cloudfarms.in/assets/images/legal-how-does-it-work/call-back.png" className='float-left' height='70px' width='90px' alt="" />
                        <div className="card-body" >
                           <h4>2.Call back</h4>
                            <p>Our experts will call you back once we receive your inquiry and give you complete details about your query. Our customer satisfaction is most important to us.</p>
                        </div>
                    </div>

                  </div>

                  <div className="col-sm-3" >
                    <div className="card "  >
                      <img src="https://cloudfarms.in/assets/images/legal-how-does-it-work/processing-fees.png" className='float-left' height='70px' width='90px' alt="" />
                        <div className="card-body" >
                           <h4>3.Processing Fees</h4>
                            <p>Once you opt for the legal services as per your requirement we will charge you a nominal fee and start working on your requirement.</p>
                        </div>
                    </div>

                  </div>

                  <div className="col-sm-3" >
                    <div className="card "  >
                      <img src="https://cloudfarms.in/assets/images/legal-how-does-it-work/results.png" className='float-left' height='70px' width='90px' alt="" />
                        <div className="card-body" >
                            <h4>4.Results</h4>
                            <p>We will come up with rapid and most trusted results for your query</p>
                        </div>
                    </div>

                  </div>
                </div>
          </div>

              <div className="content2 mt-5">
                <div className="row">
                  <div className="col-sm-6">
                    <h4>Why Legal Verification?</h4> <br />
                    <p><img src="https://em-content.zobj.net/source/joypixels-animations/366/check-mark-button_2705.gif" alt="" width='26px' />  For safe and protected investment</p> <br />
                    <p><img src="https://em-content.zobj.net/source/joypixels-animations/366/check-mark-button_2705.gif" alt="" width='26px' />Assure that seller has right to sell the property</p> <br />
                    <p><img src="https://em-content.zobj.net/source/joypixels-animations/366/check-mark-button_2705.gif" alt="" width='26px' />To avoid transactions if the property is fake or forged</p> <br />
                    <p><img src="https://em-content.zobj.net/source/joypixels-animations/366/check-mark-button_2705.gif" alt="" width='26px' />Proof of Ownership means title or right to possession</p>
                  </div>
    <div className="col-sm-6 request   ">
                    <h4 className='mt-2'>Contact our Legal Experts</h4>

            <div className="mx-auto px-2 py-2 ">
                <form  >
                 <div className="row">
                  <div className="col-6">
                  
                  
                  <input type="text"
                  id='name'
                   
                  placeholder='name'
                  className='form-control  mt-3 mb-3'
                  {...register("name",{required:'True'})}
                  />
                  {errors.name?.type==='required' && <p className='text-danger'>*this field is required</p>}
                  </div>
                  <div className="col-6">
               
                  <input type="tel"
                  id='phoneno'
                  placeholder='phone no'
                  className='form-control mt-3 mb-3'
                  {...register("phoneno",{required:'True'})}
                  />
                  {errors.phoneno?.type==='required' && <p className='text-danger'>*this field is required</p>}
                  </div>
                  </div>

                  <div className="row">
                  <div className="col-6">
                  
                  <input type="text"
                  id='email'
                  placeholder='Email'
                  className='form-control mt-3 mb-3'
                  {...register("email",{required:'True'})}
                  />
                  {errors.email?.type==='required' && <p className='text-danger'>*this field is required</p>}
                  </div>
                  <div className="col-6">
                  
                  <input type="city"
                  id='city'
                  placeholder='city'
                  className='form-control mt-3'
                  {...register("city",{required:'True'})}
                  />
                  {errors.city?.type==='required' && <p className='text-danger'>*this field is required</p>}
                  </div>
                  </div>
                  <textarea name="message" id="message" cols="30" rows="7" className='form-control mt-2' placeholder='your message'></textarea>
 
                
                  <button className='btn btn-primary mt-3' type='submit'>send message</button>
                  
                </form>
              </div>




                  </div>
                </div>
              </div>

              <div className=" verificationservices mt-5 border border-shadow px-5 py-4">
                <h4 className='text-center mt-3'>Let's us together make your farmland buying journey smooth</h4>
                <p  className='mt-3 text-bold mb-4 text-center' >Our legal verification services ensure that your property is free from any kind of legal tussles & provides protection from fraudulent transactions. We will feel privileged to keep you protected.</p>

                <h3 className='text-center mb-3'>Benefits for Buyers</h3>
                <div className="row">
                  <div className="col-6">
                  <p><img src="https://em-content.zobj.net/source/joypixels-animations/366/check-mark-button_2705.gif" alt="" width='26px' />Legal Assistance on Title Check, Litigations & Government Approvals</p> 
                  </div>
                  <div className="col-6">
                  <p><img src="https://em-content.zobj.net/source/joypixels-animations/366/check-mark-button_2705.gif" alt="" width='26px' />Safeguarding against fake & fraudulent documents</p> 
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                  <p><img src="https://em-content.zobj.net/source/joypixels-animations/366/check-mark-button_2705.gif" alt="" width='26px' />Get expert opinion to avoid any losses in future</p> 
                  </div>
                  <div className="col-6">
                  <p><img src="https://em-content.zobj.net/source/joypixels-animations/366/check-mark-button_2705.gif" alt="" width='26px' />A legal practitioner will guide you through all your legal queries</p> 
                  </div>
                </div>


              </div>

              <div className="documentsrequired mt-5">

              <h2 className='mt-3' >Frequently Asked Questions</h2>
             <h5 className='mb-3 mt-1'>All you need to know about Legal Verification</h5>


             <div className="accordion">
                {accordionData.map(({ title, content }) => (
                       <Accordion title={title} content={content} />
                 ))}
              </div>
 

              </div>

      </div>

             

    </div>
  )
}

export default LegalVerification