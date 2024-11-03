const http=require('http');

const server=http.createServer((req ,res)=>{
    
    res.write('First code')
    res.end()
});


//portno , domain name
server.listen(4500,'localhost' ,()=>{
    console.log("server statted");
});

