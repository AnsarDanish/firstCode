const { log } = require('console');
const fs=require('fs');
/*
 Type of module in nodejs

 built in module
custom module -- user define
external module -- 

*/
//console.log(fs);

console.log('start 1');

 let ansOfFiles=fs.readFileSync('./File/info.txt','utf-8')
 console.log(ansOfFiles);
console.log('end 1');


console.log('start 2');
fs.readFile('/File/info.txt','utf-8' ,(err,data)=>{
    err?console.log(err):console.log(data);
 })

console.log('end 2');

/* 

JavaScript operates on a single-threaded model, which means it executes code in a single sequence, one operation at a time. However, it can handle asynchronous operations using callbacks, promises, or async/await. This allows JavaScript to perform non-blocking I/O operations, such as reading files or making network requests, without freezing the entire program.

in js using asynchronous and single thread , it does not block the thread but also it is not run on multi-thread . node js never wait for result of network api. we can achieve behaviour like multi-thread but using non-blocking input out and event loop and call back queue and micro-task-queue .only js code is executed by js thread .



*/

/* reading html file */
fs.readFile('./File/home.html','utf-8' , (err,data)=>{

    if(!err){
        console.log(data);
    }
})
  