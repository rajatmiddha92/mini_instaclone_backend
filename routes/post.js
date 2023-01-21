const express=require('express');
const bodyParser=require('body-parser')
const Post=require('../models/posts')
const fs=require('fs')
const multer= require('multer')
const path=require('path')


const router= express.Router()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })


router.post('/posts',upload.single('avatar'),async(req,res)=>{
    try{ 
    let {name,location,description,likes,Date}=req.body
    if(name && location && description)
    {
        let data=await Post.create({likes,Date,name,location,description,PostImage: {data: fs.readFileSync(path.join(__dirname,'..','images/'+ req.file.filename)), contentType: 'image/png'},})
    return res.status(201).json({message:'Post Created',data})
    }
    else
    {
      return  res.status(400).json({message:'details are missing'})
    }
}
catch(err){
   return res.status(400).json({message:err.message})
}
})

router.get('/posts',async(req,res)=>{
    try{
    let data=await Post.find().sort({$natural:-1})
     return res.status(200).json(data)
    }
   catch(err){
    return res.status(400).json({message:err.message})
   }



})



module.exports= router