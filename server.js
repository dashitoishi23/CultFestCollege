const express=require('express');
const app=express();
const mongoose=require('mongoose');
const db=require('./config/keys').mongoUrl;
const bodyParser=require('body-parser');
const users=require('./routes/api/users');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(db,{
    useNewUrlParser: true
})
.then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));






app.use('/api/users',users);




const port=process.env.PORT||5000;

app.listen(port,()=>{
    console.log(`server connected at ${port}`);
});