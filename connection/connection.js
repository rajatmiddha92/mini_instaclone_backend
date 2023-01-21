const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
let uri=`mongodb+srv://rajat:qazwsxedc1@cluster0.xez06ht.mongodb.net/?retryWrites=true&w=majority`
async function dbConnection(){
    await mongoose.connect(uri,(err)=>{
       if(err)
       {
        console.log(err)
       }
       else
       {
        console.log('connected')
       }
    })
}

module.exports= dbConnection;