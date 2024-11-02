/*
  when we execute this code golebal execution context is created. and it is pushed into the call stack
  it some thing like big box. it consist in two phase . it works in two phase 
  1) memory creation phase
  2) code execution phase

  1) in the first phase it allocate the memory to all varible and function
      n:  undefined    in case of function  square:{......}(Whole code)  ,   sq2:undefined  ,   sq3:undefined

      undefined is like place holder, it is special keyword in java script

  2) secode phase is code execution phase
     now java script run this below code line by line.
     after reading first line n replaced to identifier n:2
     after reading  2 to 6 it will do nothing
     after reading 7 line it will invoke function and then internally agian memory execution and code execution will take place and then
       executuion context is deleted
    after reading 8 line same will happen
    then exeternal executuion context will be deleted
*/
/*
   Javasctipt manages all the execution context creation and deletion in call stack. in bottom side of stack global execution stack , and then
   when it is required it creates second execution context for calling function.
   
*/

var n=2;     //1
function square(num)  //2
{                     //3
    var ans=num*num;  //4
    return num;       //5
}  //6

var sq2=square(n);  //7
var sq3=square(4);  //8
