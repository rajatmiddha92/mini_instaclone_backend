const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const postSchema= new Schema({
    name:{type:String, required:true},
    location:{type:String, required:true},
    likes:{type:Number, default:0},
    description:{type:String, required:true},
    PostImage: { data : Buffer,
    contentType: String },
    Date: {type: String, default: new Date().toLocaleDateString()}
})

const PostModel= mongoose.model('post',postSchema)

module.exports = PostModel