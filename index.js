const express = require('express')
const postRoute=require('./routes/post')
const conn= require('./connection/connection')
const cors = require('cors')
const port=  process.env.PORT  || 4500 
conn()

const app=express()

app.use(cors())

app.use(postRoute)
app.get('/',(req,res)=>{
    res.send('OK')
})

app.listen(port)