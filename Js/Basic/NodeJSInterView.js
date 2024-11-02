
/*

‌what is node js 
node js is open source , cross platform environment. 
node js is an environment that allows or help to execute the java script code out side the browser means server. 
Node js is not a language it is an interpreter and environment.
Node js works on non blocking input output model means it doesn't wait for the task with call another task. 
before node js we were executing javascript only in browser. 
Browser has v8 engine that helps to execute or provide environment to execute javascript code.
node js provide some in built module like fs ( to read and write file) , http ( to create server)
node has npm that manage library dependency
Node js has a modular architecture allowing developers to break their code into reuseable modules.

and also some external module we use like Express js 
with the help of Express js we can create web application.
we can write the code for connecting with the database. We can save the data inside database or database data
that can be consumed through node js just like another Language . 


****** feature
node has npm that manage library dependency
node has real-time capabilities  ( it  is very good for handling bi-directional comunicaion ex;- chat boat app , gaming app etc )
asynchronouse
cross-platform
function way of programing ( higer order fucntion);
object oriented programing it support


** dis-advantage
avid for application that involve heavy cpu processing (image/video / data encryption) node js may not provide
optimal performance in such scenario beacz it single threaded and for heavy computation multi-thraeded is better




******* How Node js Works:- Node js is a run time environment that allows to run java script code 
out side the browser.It is built on the V8 javascript engine which is the same engine used by google chrome.

a) Node js uses an event driven , non blocking I/O model this means that instead of waiting for Operation result,
Node js continues its execution other task. When an operation has finished then corresponding callback
function is executed.
b) It is single Threaded but using call back it perform asynchronous operation.
c) Node js has a modular architecture allowing developers to break their code into reuseable modules.
callbacks






******What is diffrenece between synchronous and asynchronous function:-

When a main thread call any function and waits result of that function that is called synchronous function. And u know


sysnchronouse:
when the task is called sequenyially then it is called sysnchronouse
  createOrder , proceedToPayment , generateBill , updateWallet

Asysnchronouse:
asynchronous operations means execution of one task is independent to another task. 
Some operation will independent execute behind the main program flow. 
In node js we have call back function that function is executed Asynchronusly. 
Our main thread would not wait for the results of that function. 
Java prodives asynchronous operation using thread concept. By default java is executes the program Synchronous way.

    register and client data

Ajax:- ajax is nothing but a operation in which request is sent to server by http method
and recived data from server without page Without refresh this happen beacuse ajax is
performed Asynchronouse.
if u have json string and have to convert json object
so use let record=JSON.parse(varibleOFJsonString)

*******  Promise is the special object to perform asynchronouse operation.
promise has three state :- first state is pending state (Promise is going to be
initialized)
Resolved state (promise has been fullfilled) operation successfully done
Rejected() operation failed

these promises is handled by handler method then() catch()
if promises is fullfilled then() executed
if promises is rejected catch is executed
axios:- for example we have axios library that is used to call web api
axios also works on promise . it return promise state either fullfilled or rejected.
axios basically perform ajax.without page refreshment data comes from web api

fetch:- fetch is also used to call api .for using fetch we not need to use external
library. fecth also return promise
either it would be fullfilled or rejected by the server

******** what is async and await:-
in node js operation is performed event driven non blocking i/o model. Or some operation which is performed
asynchronously . but if we want that operation should executed sequentially then async and await keyword is used.
In node js “async ” is a keyword used to define function that can perform asynchronouse operation . by marking fuction
as async you can use the await keyword inside that fuction to pause its execution until promise is resolved or rejected.




****** Express:- express is a web application framework for node js which provides a set of featured and utilities to 
build web application.
 it helps to in handling http request for that it provide http methods,
 it is used for bulit  routing ,  and exexute middleware  for managinig server.


******* Why Nodejs is populer:- there can be multiple reason but as I know only that it has a rich library, 
and also it is single threaded and does asynchrnouse operation.

Npm :-npm stands for node pakage manager. It is a package manager that comes bundled with nodejs is used for
managing and installing third party framework or libraryies.



***** package.json
this file keeps  project meta data  name , version , dependency etc.

*** what is module
module is set of functionality that can be reuable. 
ex: order is a module in e-commerce app

****** how may way you can export module
we can export directly varible and object as well

brdault function , varible and object is accessible only in current file. it can not accessible in another file
for make it possible  use export

1) exports.something
2) module.exports.sayHi=sahHi




1) Express js:- express js is a web application framework for node js which provides a set of featured and utilities to build web application.
 it  helps to in handling http request, routing , middleware integration , managing  server.


 3) body parser :- it is a middleware which is used to handle all incoming http request data, specifically the data sent 
 in request body. it parse the data which comes from frontend. if we will not use then we cant access sent data from frontend.

   different client may send data in various format such as json , xml . body parser detect those data content type of the incoming
   data and convert it into javascript object

4) multer :- it is a middleware for read file data from incoming request. it is used to to read single file or multiple file.

5) cors()


******  Authetication :- who are you
Authorization :- what are the things you are allowed , it can be based on role 

Authetication:- Verifying the user is he valid user or not.
Authentication is done in two ways
1. state full:-
first take an example that one person went into mall and he gave his car to parking boy . parking boy gave him ticket
in his ticket there was written number 10. and also parking boy has register his vahical number in his copy.
so when he will compelete his shopping then he came in parking and gave ticket back to boy and that boy gave him car back.

boy storing some data in his book that is state full . mainting data is state full.
same thing we do in software also in my backend I keep some unique id that is called session id . and that session
id is sent back to cookie to user. when user comes and ask some api result we autheticate it from session id

2. state less :- it's example is boy will not write any thing it's copy . he will write all the information in his 
ticket . same thing is done in Jwt (json web token) 
secrent key === stamp
secret key is used to make token, and same secret key is used to verify the user 

              




*/