 
import React from 'react'
import './BankLoan.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useForm} from 'react-hook-form'
import Accordion from './Accordion';

function BankLoan() {

  const accordionData = [
    {
      title: 'Checklist of Documents for Company & Firm Required',
      content: `1. KYC (Aadhaar Card, PAN card) of all Directors  

      2. KYC of Company i.e PAN card of the company, MOA and AOA of the company  
      
      3. Business licenses along with UDYAM registration certificate 
      
      4. Please provide a brief on business done by the company  
      
      5. Audited Balance Sheet (last 3 financial years)
      
      6. Provisional Balance sheet of last financial year
      
      7. Estimated financials of FY23 and FY24.
      
      8. Income Tax Returns (ITR) of Company / all Partners (last 3 financial years) with computation
      
      9. GSTR for period FY21, FY22
      
      10. Sanction orders of existing loans and accounts statements from 01.04.2021 to till date In the name of Directors and Company from multiple Banks.
      
      11. Bank account statement of Current and CC accounts of last 1 year. ( In PDF format)
      
      12. Computation of total income of directors/co-obligants for FY '21 and FY’22.
      
      13. Net worth Certificate – Firm and Directors.
      
      14. Top 5 suppliers and 5 buyers list of FY '21 and FY’22 along with the amount.
      
      15. CA certified debtors aging certificate,
      
      Latest shareholding pattern and board resolution for proposed loan, external rating report of company.` 
    },
    {
      title: 'Checklist of Documents Required for Individual',
      content: `1. KYC & 2 photos of Applicant and Co-Applicant

      2. ITR of last 2 years with computation of Applicant and Co-Applicant
      
      3. Saving Account statement of last 1 year of Applicant and Co-Applicant
      
      4. Sanction order and account statement of existing loan availed by Applicant and Co-Applicant
      
      5. If salary person then last 6-month salary slip of Applicant and Co-Applicant`
    },
    {
      title: 'Land Documents Required',
      content: `1. Sale agreement of proposed Agri land

      2. Jamabandi and Girdawri of proposed Agri land / Agriculture khasra and Khatauni
      
      3. Jamabandi of existing Agri land if the borrower is having it in his own name or in his close family member
      
      4. Last 30-year title of the proposed Agri land
      
      5. Government Map of the land
      
      6. Documentary proof confirming the transaction such as ATS. Also provide details of Payments made along with your Bank name, and account statement`
    },
    {
      title: 'Processing Fees',
      content: `With just 1% of the nominal processing fee, you can avail loan to buy the agricultural land of your choice.`
    },
    {
      title: 'Rate of Interest',
      content: `With a rate of interest as low as 10-12% you can meet the cost of purchasing land for agriculture and related uses like warehouses, poultry farms, and many more. Also, the ROI depends on borrowers' credit ratings as well depending upon the situation

      We assure you of a delightful experience with us. We are happy to help you!`
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
          <div className='content mt-4'>
                <div className="row ">
                  <div className="col-sm-3"  >
                    <div className="card ">
                      <img src="https://cloudfarms.in/assets/images/bank-how-does-it-work/details-form.png" className='float-left' height='70px' width='90px' alt="" />
                        <div className="card-body" >
                            <p><h3>1.</h3>Fill up all the details in the inquiry form given on our website to begin the process</p>
                        </div>
                    </div>

                  </div>

                  <div className="col-sm-3" >
                    <div className="card" >
                      <img src="https://cloudfarms.in/assets/images/bank-how-does-it-work/executive.png" className='float-left' height='70px' width='90px' alt="" />
                        <div className="card-body" >
                            <p><h3>2.</h3>Our executive will reach out with the best offers we have for you as per the requirement.</p>
                        </div>
                    </div>

                  </div>

                  <div className="col-sm-3" >
                    <div className="card "  >
                      <img src="https://cloudfarms.in/assets/images/bank-how-does-it-work/documents.png" className='float-left' height='70px' width='90px' alt="" />
                        <div className="card-body" >
                            <p><h3>3.</h3>The concerned person will collect the documents from you and submit them to the next department.</p>
                        </div>
                    </div>

                  </div>

                  <div className="col-sm-3" >
                    <div className="card "  >
                      <img src="https://cloudfarms.in/assets/images/bank-how-does-it-work/approved.png" className='float-left' height='70px' width='90px' alt="" />
                        <div className="card-body" >
                            <p><h3>4.</h3>Bank will review your documents and confirm your approval accordingly.</p>
                        </div>
                    </div>

                  </div>
                </div>
          </div>

              <div className="content2 mt-5">
                <div className="row">
                  <div className="col-sm-8">
                    <h3>Loan Process</h3> <br />
                    <p>We provide you with a loan to meet the cost of your agricultural land and levied activities. The loan amount of 75% value of the sale agreement or government value of land is provided for a tenure of a maximum of 7 years which has to be paid in easy monthly installments. We charge a minimum processing fee of 1% while commencing the procedure of your loan application. The quick and simple loan process begins once the lender fills up an inquiry form on our website thereafter our executive will call you regarding your requirements and begin the process after collecting the required documents. Once the documents are verified by the senior executives of the loan department in the bank, the concerned executive will approach you with the final approval depending upon the genuinity and eligibility of your documents. We assure you that we are there to help you resolve your monetary stress by making it convenient for you by providing the best solutions as per your eligibility and requirements. If the fund is required from the bank side at the time of registration, then the Interim collateral security forced sale value of the property is 150% of the loan Amount also required and the same will be released after the creation of bank charge on newly purchased properties. Collateral security is forced sale value of the property is 150% of the Loan Amount</p>
                  </div>
                  <div className="col-sm-4 request ">
                    <h3>Request Info</h3>

                    <div className="mx-auto   ">
                <form  >
                 
                  <label htmlFor="username">name</label>
                  <input type="text"
                  id='name'
                  placeholder='name'
                  className='form-control  mt-3 mb-3'
                  {...register("name",{required:'True'})}
                  />
                  {errors.name?.type==='required' && <p className='text-danger'>*this field is required</p>}
                  

                  <label htmlFor="phoneno">phone</label>
                  <input type="tel"
                  id='phoneno'
                  placeholder='xxxxxxxxx'
                  className='form-control mt-3 mb-3'
                  {...register("phoneno",{required:'True'})}
                  />
                  {errors.phoneno?.type==='required' && <p className='text-danger'>*this field is required</p>}

                  <label htmlFor="email">email</label>
                  <input type="text"
                  id='email'
                  placeholder='@gmail.com'
                  className='form-control mt-3 mb-3'
                  {...register("email",{required:'True'})}
                  />
                  {errors.email?.type==='required' && <p className='text-danger'>*this field is required</p>}


                  <label htmlFor="">city</label>
                  <input type="city"
                  id='city'
                  placeholder='city'
                  className='form-control mt-3'
                  {...register("city",{required:'True'})}
                  />
                  {errors.city?.type==='required' && <p className='text-danger'>*this field is required</p>}
                  
 
                
                  <button className='btn btn-danger mt-3' type='submit'>Register</button>
                  
                </form>
              </div>




                  </div>
                </div>
              </div>

              <div className="eligibilityCriteria mt-5">
                <h2>Eligibility Criteria</h2>
                <p  className='mt-3' >Farmers, Dairy Owners, Horticulturists, and any Orchard owners are the people who are eligible to apply for an Agriculture Loan. We prefer the age of the applicant to be between 24 to 65 years of age. However, in some cases, we offer loans to applicants who are 18 years of age. We will offer a 75% loan of the sale agreement value or government value of the land. The eligibility differs from situation to situation but you must have all genuine documents required to process the loan further in any case. If the land is owned by two people, co-applicant is mandatory. Agricultural land is pledged as collateral. The borrower should have clear titles while applying for the loan. The most important factor while applying for a loan to buy farmland is that you must be an Indian citizen levied in activities related to agriculture. The lender should have stability in terms of finances to ensure repayment. Depending on the above factors the amount of the loan is also decided.</p>
              </div>

              <div className="documentsrequired mt-3">

              <h3 className='mt-1' >Documents Required</h3>
             <p className='mt-2' > As a Lender, we need to access your financial health and stability before providing you a loan amount for buying your agricultural land in order to verify that you will repay the amount as per the set pattern timely and diligently. To know your creditworthiness we would require certain documents which are as follows:</p>


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

export default BankLoan