/* for of loop every time creates fruit varible and directly u can print
but u know that for in loop always returns key and array is also key and valu



*/
let frt=["abc" ,"cde" ,"fgh" ,"igk"]

let mapArr=frt.map((ele , index ,arr)=>{
    console.log(index,arr);
    
    return ele.toUpperCase();
})
console.log("1" ,mapArr);

    let ftArr=frt.filter((ele , index , arr)=>{
        console.log(ele , index , arr);
        return ele.toLowerCase().includes("gh")
        

    })
    console.log("2" , ftArr);

   const nums=[1,2,3,4,5,6,7,8,9,10];
  let sm=nums.reduce((prev , cuur , currIndex)=>{
        return prev+cuur;
  },5)

  console.log("3" ,sm);

  function add(...numsArr){
   let st= numsArr.map((prev , cur , curIndex)=>{
       return prev+cur;
    })


  }
  const user ={
    name:'danish',
    age:50,
    address:{
        city:'bhiwandi',

    }
}
 const {name}=user;
 const {age:userAge}=user;
 const {address}=user;
 console.log("4" , address);
 const {address:{depAdd}}=user;
 user.address.city="thane";
 console.log("5" , address);
 console.log("6" ,depAdd);
 



 



    
