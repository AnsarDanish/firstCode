/* 
******* how to create db in mongodb
use cdac2024   -- creating and selecting as current db

****** how to check which is current db
db
show collections  --> check collection (tables) in active db
db.createCollection('user') --> cretate collection

db.createCollection('product')
show collections   --> check all collections
show dbs     ---> check all dbs

db.user.insertOne({name:"Kurtaa",price:2000})
db.user.insertMany([{name:"Kurtaa",price:2000},{name:"Pajama",price:5000}])
db.user.insert([{name:"Kurtaa",price:2000},{name:"Pajama",price:5000}])


******* select query equivalent
db.user.find();
db.user.find().pretty();
db.user.find({name:'shoes'}).pretty();       --- where name='shoes'
db.user.find({name:{$in:['shoes','sunglass']}}).pretty();       --- where name='shoes' or name='sunglass'

db.product.find({price:{$gte:300}})
db.product.find({price:{$lt:300}})
db.product.find({price:{$lte:300}})
db.product.find({price:{$eq:2000}})
db.product.find({price:{$ne:2000}})

db.product.find({$or:[{name:'belt'},{price:700}]})  -- where name='belt' or price='700'
db.product.find({$and:[{name:'belt'},{price:600}]})  -- where name='belt' and price='600'

********* remove from table
 db.product.remove({})
 db.product.remove({name:'belt'})

 **** update

 db.product.update(condition , data to update)
 db.product.update({name:'jeans',{$set:{name:'blue jeans',price:12000 }}})




*/

console.log("Danish");
let brands=["Danish" ,"Ansari","Hazim"]
for(let br in brands){
    console.log(br);
}

for(let br of brands){
    console.log(br);
}
let user={
    name:"Danish",
    firstName:"Ansari",
    lstName:"abc"
}
console.log(user);
// for(let br of user){
//     console.log(br);
// }

for(let br in user){
    console.log(br);
}

console.log("this",this);

setInterval(()=>{
    console.log(Math.random());
},2000)

setTimeout(()=>{
    console.log("setTimeout");
},3000)
