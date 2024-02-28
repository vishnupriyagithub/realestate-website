const exp=require("express")
const todoApp=exp.Router()

const multerObj=require("./middlewares/CloudinaryConfig")


const expressAsyncHandler=require("express-async-handler");

// check for formData when multer is not used
// todoApp.use(exp.urlencoded({
//     extended: true
//     }));

todoApp.use(exp.json())

todoApp.post('/Add-Todo',expressAsyncHandler(async(request,response)=>{ 
    const todocollectionObj=request.app.get("todocollectionObj"); 
    
    const newTodo=JSON.parse(request.body.tod) 
    await todocollectionObj.insertOne(newTodo)
    response.status(201).send({message:"todo added"});
 }))

 module.exports=todoApp