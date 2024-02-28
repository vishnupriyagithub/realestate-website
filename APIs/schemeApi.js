const exp=require("express")
const schemeApp=exp.Router()

//import express-async-handler
const expressAsyncHandler=require("express-async-handler")
 

//import //bcryptjs module
const bryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");
const verifyToken=require("./middlewares/verifyToken")

schemeApp.use(exp.json())

  
schemeApp.post('/add-scheme',expressAsyncHandler(async (request,response)=>{
   //get user collection
   const schemecollectionObj=request.app.get("schemecollectionObj")
  //get new user 
  const newUser=request.body; 
 
    await  schemecollectionObj.insertOne(newUser)
    response.status(201).send({message:"user created"});
     
 
  
}) 
);



 

//update land details

schemeApp.put("/update-scheme",expressAsyncHandler(async (request,response)=>{
    //get landcolletionobj
    const schemecollectionObj=request.app.get("schemecollectionObj");

    let modifiedData=request.body;

    let dbRes=await schemecollectionObj.updateOne(
        {_id:modifiedData._id},
        {$set:{...modifiedData}}

    );
  
    console.log(modifiedData)
    response.status(200).send({message:"data updated"});

}));


schemeApp.get("/get-scheme",expressAsyncHandler(async (request,response)=>{
    //get landolletionobj
    const schemecollectionObj=request.app.get("schemecollectionObj");


    //get users from db
    let landData=await schemecollectionObj.find().toArray(); 
    response.status(200).send({message:"data details",payload:landData})
}))


module.exports=schemeApp