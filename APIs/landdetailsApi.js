const exp=require("express")
const detailsApp=exp.Router()

//import express-async-handler
const expressAsyncHandler=require("express-async-handler")
 

//import //bcryptjs module
const bryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");
const verifyToken=require("./middlewares/verifyToken")

detailsApp.use(exp.json())

  
detailsApp.post('/add-land',expressAsyncHandler(async (request,response)=>{
   //get user collection
   const landdetailsCollectionObj=request.app.get("landdetailsCollectionObj")
  //get new user 
  const newUser=request.body;
  //check for duplicate user by username 
  console.log(24)

 
    await  landdetailsCollectionObj.insertOne(newUser)
    response.status(201).send({message:"user created"});
     
 
  
}) 
);



 

//update land details

detailsApp.put("/update-land",expressAsyncHandler(async (request,response)=>{
    //get landcolletionobj
    const landdetailsCollectionObj=request.app.get("landdetailsCollectionObj");

    let modifiedData=request.body;

    let dbRes=await landdetailsCollectionObj.updateOne(
        {_id:modifiedData._id},
        {$set:{...modifiedData}}

    );
  
    console.log(modifiedData)
    response.status(200).send({message:"data updated"});

}));


detailsApp.get("/get-land",expressAsyncHandler(async (request,response)=>{
    //get landolletionobj
    const landdetailsCollectionObj=request.app.get("landdetailsCollectionObj");


    //get users from db
    let landData=await landdetailsCollectionObj.find().toArray();
    console.log(landData)
    response.status(200).send({message:"data details",payload:landData})
}))


module.exports=detailsApp