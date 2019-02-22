const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    enrollment:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const User=mongoose.model('users',UserSchema);
module.exports=User;