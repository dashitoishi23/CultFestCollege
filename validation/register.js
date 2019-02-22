const validator = require('validator');
const isEmpty =require('./is-empty') ;

module.exports=function validateRegisterInput(data){
  let error={};
  data.name=!isEmpty(data.name) ? data.name :'';
  data.email=!isEmpty(data.email) ?data.email :'';
  data.enrollment=!isEmpty(data.enrollment) ?data.enrollment:'';
  data.gender=!isEmpty(data.gender) ?data.gender:'';
  data.branch=!isEmpty(data.branch) ?data.branch:'';
  data.phone=!isEmpty(data.phone)?data.phone:'';
  
  if(!validator.isLength(data.name,{min:2,max:30})){
      error.name="minimum length 2 and max 30";
  }
  if(validator.isEmpty(data.name)){
    error.name=" name is required"; 
  }

  
  if(!validator.isEmail(data.email)){
      error.email="valid email required";
      
  }
  if(validator.isEmpty(data.email)){
    error.email=" email is required"; 
  }

  
  if(!validator.isLength(data.enrollment,{min:11,max:11})){
      error.enrollment="enrollment is not valid";
  }
  if(validator.isEmpty(data.enrollment)){
    error.enrollment=" enrollment is required!"; 
  }

  if(!validator.isLength(data.phone,{min:10,max:10})){
    error.phone="phone number is not valid";
}
if(validator.isEmpty(data.phone)){
  error.phone=" phone is required!"; 
}

if(validator.isEmpty(data.branch)){
  error.branch=" branch is required!"; 
}

if(validator.isEmpty(data.gender)){
  error.gender=" gender is required!"; 
}

  return{
    error,
      isValid:isEmpty(error)
  }
      
  
}