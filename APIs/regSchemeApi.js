const exp=require("express")
const regScheme=exp.Router()

//import express-async-handler
const expressAsyncHandler=require("express-async-handler")
 

//import //bcryptjs module
const bryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");
const verifyToken=require("./middlewares/verifyToken")

regScheme.use(exp.json())

  
regScheme.post('/post-land',expressAsyncHandler(async (request,response)=>{
   //get user collection
   const regSchemeCollectionObj=request.app.get("regSchemeCollectionObj")
   
   const newUser=request.body
   //check for duplicate user by username
     
 
  
     await regSchemeCollectionObj.insertOne(newUser)
     response.status(201).send({message:"user created"});
  
}) 
);



 

//update land details

regScheme.put("/update-land",expressAsyncHandler(async (request,response)=>{
    //get landcolletionobj
    const regSchemeCollectionObj=request.app.get("regSchemeCollectionObj");

    let modifiedData=request.body;

    let dbRes=await regSchemeCollectionObj.updateOne(
        {_id:modifiedData._id},
        {$set:{...modifiedData}}

    );
  
    console.log(modifiedData)
    response.status(200).send({message:"data updated"});

}));


regScheme.get("/get-land",expressAsyncHandler(async (request,response)=>{
    //get landolletionobj
    const regSchemeCollectionObj=request.app.get("regSchemeCollectionObj");

 
    let landData=await regSchemeCollectionObj.find().toArray();
    console.log(landData)
    response.status(200).send({message:"data details",payload:landData})
}))


module.exports=regScheme