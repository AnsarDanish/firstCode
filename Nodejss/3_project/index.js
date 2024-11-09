const express=require('express');
require('dotenv').config();

const userRoute=require('./routes/userRoute')


 const app= express()
// app.get('/' ,(req ,res)=>{
//    res.send('hello world')
// })

// http://localhost:4500/users
app.use('/users' ,userRoute)

/* process is the global object in node js */

app.listen(process.env.PORT, process.env.HOST,()=>{
 console.log('server is running');
})

