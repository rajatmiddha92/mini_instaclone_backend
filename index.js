const express = require('express')
const postRoute=require('./routes/post')
const conn= require('./connection/connection')
const cors = require('cors')

conn()

const app=express()

app.use(cors())

app.use(postRoute)


app.listen(4500)