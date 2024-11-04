
const http=require('http')
const fs=require('fs')

const server=http.createServer((req ,res)=>{

    let fileName="";
    console.log(req.url);
    if(req.url=='/' || req.url==="/home"){
        fileName="home.html"
    }else if(req.url==="/about"){
        fileName="about.html"
    }else if(req.url==="/service"){
        fileName="service.html"
    }else{
        fileName="404Error.html"
    }

    fs.readFile(`./File/${fileName}`,'utf-8' ,function (err , data){
        if(!err){
       //  console.log(data);   
           res.writeHead(200,{'Content-Type':'text/html'}) // what content you are passing in response
            res.write(data)
            res.end()
        }
 })
});

server.listen(4500,'localhost' ,()=>{
    console.log("server is running");
})