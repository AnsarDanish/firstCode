const addUser=function(req,res){
   console.log("addUser");
   res.send("add user")
   
}

const showUser=function(req,res){
   // console.log("showUser");
   res.send("showUser")
}

module.exports={
    addUser,
    showUser
}