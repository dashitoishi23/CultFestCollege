const express=require('express');
const router=express.Router();
const User=require('../../models/User');
const validateRegisterInput=require('../../validation/register');




router.post('/register',(req,res)=>{
    const {error,isValid}=validateRegisterInput(req.body);
    if(!isValid){
        return res.status(404).json(error);
    }

    User.findOne({email:req.body.email})
    .then(user=>{
        if(user){
            error.email="this email is already exists";
          return  res.status(400).json(error);
        } 
        else{
            User.findOne({enrollment:req.body.enrollment.toLowerCase()})
            .then(users=>{
                if(users){
                    error.enrollment="this enrollment is already exists";
                    return  res.status(400).json(error);
                }else{
                    const newUser=new User({
                        name:req.body.name,
                        email:req.body.email,
                        phone:req.body.phone,
                        branch:req.body.branch,
                        enrollment:req.body.enrollment,
                        gender:req.body.gender
                    });
                     newUser.save()
                    .then(user=>res.json(user))
                    .catch(err=>console.log(err));
                }

            });

          
        }
    });
});



module.exports=router;