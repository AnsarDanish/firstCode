const express=require('express');
require('dotenv').config();

const userRoute=require('./routes/userRoute')


// const app= express()
// app.get('/' ,(req ,res)=>{
//    res.send('hello world')
// })

app.use('/users' ,userRoute)

/* process is the global object in node js */
app.listen( process.evn.PORT, process.evn.HOST,()=>{
 console.log('server is running');
})

