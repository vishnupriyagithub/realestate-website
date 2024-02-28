const exp=require("express")
const app=exp();
let cors=require('cors')
app.use(cors())
app.listen(3500,()=>console.log("web server listening port ......"));

//set path
const path=require("path")

//connect react build
app.use(exp.static(path.join(__dirname,'./build')))

//get mongo client
const mclient=require("mongodb").MongoClient;



//connect to db server using mongo client
mclient.connect('mongodb://127.0.0.1:27017')
.then((dbRef)=>{
    //connect to a database
    const dbObj=dbRef.db("prodb")
    //connect to collections of the databases
    const farmercollectionObj=dbObj.collection("farmercollection")
    const landcollectionObj=dbObj.collection("landcollection")
    const todocollectionObj=dbObj.collection("todocollection")
    const landdetailsCollectionObj=dbObj.collection("landdetailsCollection")
    const schemecollectionObj=dbObj.collection("schemecollection")
    const regSchemeCollectionObj=dbObj.collection("regSchemeCollection")

    //share collections to APIs
    app.set("farmercollectionObj",farmercollectionObj)
    app.set("landcollectionObj",landcollectionObj)
    app.set("todocollectionObj",todocollectionObj)
    app.set("landdetailsCollectionObj",landdetailsCollectionObj)
    app.set("schemecollectionObj",schemecollectionObj)
    app.set("regSchemeCollectionObj",regSchemeCollectionObj)
     
    console.log("Db connection success")

})
.catch((err)=>console.log("database connect error",err))



//import user api
const userApp=require("./APIs/farmerApi");
 
const landApp=require("./APIs/detailsApi");

const todoApp=require("./APIs/todoApi");

const detailsApp=require("./APIs/landdetailsApi")

const schemeApp=require("./APIs/schemeApi")

const regScheme=require('./APIs/regSchemeApi')
 
 

//execute user api when pathn/user-api
app.use('/user-api',userApp)
app.use('/land-api',landApp)
app.use('/todo-api',todoApp)
app.use('/details-api',detailsApp)
app.use('/scheme-api',schemeApp)
app.use('/regScheme-api',regScheme)
 

//page refresh
app.use('/*',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./build/index.html'),err=>{
        if(err){
            next(err)
        }
    })
})

const InvalidPathmiddleware=(request,response,next)=>{
    response.send({message:"invalid path"})

}
app.use("*",InvalidPathmiddleware)

const errorHandlingMiddleware=(error,request,response,next)=>{
    response.send({message:error.message});
}
app.use(errorHandlingMiddleware)