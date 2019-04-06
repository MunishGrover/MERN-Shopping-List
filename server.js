const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const items=require('./routes/api/Items')


const app=express();
app.use(bodyParser.json());

//geting keys
const DB=require('./config/keys').mongoURI
//connect to mongo db
mongoose
    .connect(DB)
    .then(()=>console.log('Mongodb Connected....'))
    .catch(err=>console.log(err))
//Use of routes
app.use('/api/items',items);





const port=process.env.PORT || 5000;


app.listen(port,()=>console.log(`Server started on ${port}`));