/*


javascript is clients side scripting language
Used to make website more interactive.
JavaScript is excuted by the browser.  But with the help of node js it can be executed in out side browser also
JavaScript is a single threaded and it perform synchrouns operation. Asynchronous operation also can be done using only 
call back function. 
Benefit of it is it perform asynchronous operation. 
With the help of function in javascript we can resuse code again and again when it is required. 

*********** ES6
default parameter
Rest parameter

spread operator
destructing 

arrow function
optional chaninig




********‌spread operator ... It is represted by this
        Use copy one array element to another arr
    It is also use to merge to array also two object. 
Ex : arr=[...s1] obj ={ ... Obj1,...obj}


‌******** const let and var
     Var can be decalre again but not remaining 2
     Var and let can be reassigned but not const


********‌ map and filetr and reduce interview Q

 Both are array function. Map takes call back function. Both resturn new aaray
Reduce function gives single value like sum
‌type of Nan Number
     Set is also an array but it doesn't have duplicate, const data ={ "a" "B" "C"}
    Const [ y] = data ; // a

*******‌inner html and innertext
‌getElementById("main")
      GetElementsByClassName(name) 
     Get ElementsBytagName(name) 
*******‌alert to show message
prompt to get value and
 confirm retur true or false

********‌what is event in javascript
In JavaScript, an "event" is an action or occurrence that happens in the browser,
 such as a user clicking a button, moving the mouse, pressing a key, or the browser 
 finishing loading a web page. Events are used to trigger JavaScript code to respond to these actions.

*********‌what is DOM in javascript
It stands for Document object model . It represents all html tag in javascript as an object that's
 basically form tree data structure. With the help of these object dynamically content of tags can be change. 
 It has a property like css, innerhtml, innertext , Inside a document object we have different method like getElement by id ,
  get elements by class, get elemets by tag name, queryselector, and queryselector all
With the help of javascript we can attached the events to object. 

***********‌when javascript code is run
Or executed then execution context is created and this execution context has 2 phase. First is memory allocation 
phase to varible and function. In this phase memory is allocated to all the varible which has let var const keywords.
 And whole function also get allocated as a string. And 2nd phase is code execution phase in this phase code is executed line by
  line. 

‌*********call stack
Javascript manages code execution context creations and deletion with call stack.
 When it creates first global execution context it push that context. 
 After that it creates local execution context for function then it push to call stack. 

************‌hoisting
Is a mechanism in javascript in which varible value and function is called before 
its declaration without any error. This gives the error in another programming language but in javascript we can call 
the function and we can use varible as well. And this happen because before code execution
 phase memory allocation happen in javascript. 

 

‌************* global space : 
Any thing which is not created inside a function that varible Or function will get memory allocation in global space. 


********* ‌let and const declaration are hoisted. 
It is hoiested not in global space . It is hoiested in another space that is called script object space.
 But those varible which is hoiested in script object space we can't access before it's
  Initialization therefore when we try to access let and const varible before it's declaration it gives error
. But it doesn't happen with var keyword varible. 

*********** temporal dead zone
Time between let const varible is hoiested and it's value Initialization is called temporal dead zone. 

********‌ what is difference between let and const
Similarity
Both are getting memory inside script scope or if we define it inside block it has block scope
Outside the block it can't be accessed
Difference
1. Let varible can be declare in one line and it can be initialize in another line but
 with const we have to do it simultaneously declaration and Initialization. 

2. Second difference is let varible value can be changed anywhere in the program where it is accessible.
 But we can't do same thing we const. 

*******  ‌syntax error , type error , refrence error

Type error : assignment new value to const varible
Refrence error : when u try to access let and const varible in temporal dead zone
When u access randome varible which is not declared

Syntax error :- no duplicate let varible name
U make const varible but didn't assign value. 
‌what should u use between const let and var
We should use const And let if we are shure that later on value will not get changed.
Because if we do so we will get unexpected errors. 

******* ‌what is block :- 
Block is a group of statement. We make code in block for to expect javascript as single statement. 


*****  ‌closure 
Function bundled with its lexical environment is known as closure.
 Actually when we return a function from a function so only we don't return that function we return also refrence of varible of
  outer function. Or we say that we return all memory space of outer functions that is call lexical environment . 

  ************‌what is lexical environment
Lexical environment is current memory space and parents lexical environment (mean where the function is sitting)
 that's memory space.
 (current memory space and all its all  parent  function memory space )

*********  Advantage of closure. 
Data hiding , abstraction , module design pattern , to perform asynchronous operation
‌data hiding

********   Data hiding is something hiding the data from outer world. Basically a varible data is there and then
 we don't want to give direct access to another part of program. 


‌*******  set time out 
This function takes argument call back function. 
It take call back function in a varible and store it somewhere and attached the time interval with it. 
When time get finish then settime out function return call back function in call back queue. 
Event loop it handle call back queue it continues keep eye on call stack and call back. 
When it see that global execution context is removed from javascript engine from call stack
 then event loop push call back function to call stack. And then javascript engine execute it. 

‌********** garbage collector 
Garbage collector is a program or thread basically it freeze or de allocate the varible and object
 from memory space when varible is no longer use 

*************** ‌first class function or first class citizen
When a function is passed as an argument and return function from outer function,
 this ability is known as first class function. 

‌function statement or function declaration
 When function is declared with function name is known as function statement

‌function expression :-When anonymous function is assigned to a varible is known as function expression. 

‌call back function 
When a function is passed to another function as an argument this is known as call back function. 
So it up to caller function when it calls call back function. 


‌event listeners
document. Get elements by id ( ). Add event listener (event name, CB ) 
In this line of code javascript add an event to the document object which has same id.
 And attached to that event a call back function. So when the event happen call back function 
 is sent to call stack and javascript engine execute call back function. 


**********‌ event loop

1. Inside javascript engine it has call stack. Inside call stack java script pushed execute context. 
That execution context could be any of type . It can golab execution context or local execution context. 
 
2. Inside call stack javascript execute the code after creating execution context. 
But assume if we have to execute some part of code after some interval of time but it is not possible using javascript
 because call stack doesn't have time. 

3. for executing code after some interval of time we need some super power .
 Browser gives lots of super power for example it give time api that we can use calling set time out function, 
 fetch api, document object, console , http method to make request to server, these are predefined object that provide by browser .
  To use also java script provide global object that is windows. 
Inside window object above object is present.


4.Same things happen also with when we attached a call back from en event. Document is also not a part of javascript. 
It is an api of browser that we can access it through window object. When we call it document.
Get element by id so from the id that particular object is get and event is registered to that objects.
When the event happen in browser then call back function is pushed to call back queue.
Then after this call back function is handled by event loop. 
we have micro task queue same as call back queue buy it has more priority then call back queue. 
Those call back function is pushed to micro task queue which get registered by promise object.
 Event loop first give priority to call back function which is in the micro task queue. 
‌


***** what is higher order function

When a function takes an argument of function and return a function from function is known as higher order function. 
Take the example of radius of array. Make a function calculate area, calculate circumference, calculate diameter. 
And then make your code optimised me and make higher order function to do not repeat code again again. 
The function which is passed to higher order function is known as call back function. 
This is only possible because that function are first class citizen in javascript. 



    Promise.all([p1,p2,p3])  1s  ,2s  ,3s
    suceess : whole time will be taken 3s and return [v1,v2,v3]
    reject :  if one api gets fail it gives error of that api . it fails fast . not wait other promise to resolve or reject

    promise.allsettled ([p1,p2,p3])  1s,2s,3s
    success :- whole time will be taken 3s and return [v1,v2,v3]
    reject : it wait other promise to resolve or reject  [v1, error,v3]

    promise.race([p1,p2,p3])
    success:- not wait other promise to resolve or reject. whichever first api get resolve it shows its result or if an erro same
              same things happen with an error as well.


    promise .any([p1,p2,p3])
    success :- wait for the any of primise untill it see first resolve.seeking for first success.when it gets first success it quickly return
              value 
    reject :- if all of tthm promise fails it gives aggregate error [err1 ,err2 ,err3]
     


*/