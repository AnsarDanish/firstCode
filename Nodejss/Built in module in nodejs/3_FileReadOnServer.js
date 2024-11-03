/* 
 nodemon:-  how to install  --> npm i -g nodemon   -- g represent for all application
 when any changes happen nodemon automatic host new version of our file.
 after that start your application  node file.js (nodemon file.js)
*/
const http=require('http')
const fs=require('fs')



const server=http.createServer((req ,res)=>{

    fs.readFile('./File/home.html','utf-8' ,function (err , data){

        if(!err){
       //  console.log(data);
           res.writeHead(200,{'Content-Type':'text/html'}) // what content you are passing in response
            res.write(data)
            res.end()
        }

    //   if(!err){
    //      res.writeHead(200,{'Content-Type':'application/JSON'});
    //      res.write(JSON.stringify({data:'Hello world'}))
    //      res.end()
    //   }
 })
});

server.listen(4500,'localhost' ,()=>{
    console.log("server is running");
})