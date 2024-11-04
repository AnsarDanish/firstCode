1) how to start your project
npm init -y ==> it brings one file that is package.json file

{
    name:"new_project"  --> this represent project name
    version: 1.0.0

    1--> mejor changes
    2--> minor changes
    3--> patch work (bugs solving ),

    description:"",
    main:""index.js" ,

    main represent landing page,

    script:{
       "start":"nodemon index.js"  ---> so I can write in terminal  (npm start) or (nodemon index.js)
    }

    script tell us how to run your application ,
    keyword:[]

    keyword represnet when u will upload your module in npm site then how it will search by other people
}

Q) what is Mvc architecture and what are the advantage of it. this is also called three tier architecture

1. programer can independenlty can work on different layer


******** npm i dotenv    (why env required  )
 it is used to store credential
 port number and domain name we write over here
 those things which will be constant in whole project we can write it here


** when you first time install any external library or module then u get two file 
1. package-lock.json  --> berief description for each external module or lib . it keeps the information of module version , from where
                          it had been installed
2. node_modules folder -->all third party module will be register under this folder


******** npm i bootstrap

******* npm i express


*****  for refrence of express js
https://expressjs.com/




