var liTag= document.querySelector(".abc")


//Event Handling via JS 
liTag.onclick=function (){

    console.log(this);
    console.log("this");
    this.style.background = '#ccc';

    this.nextElementSibling.style.background='#569'
    this.previousElementSibling.style.background='#369';
    this.parentNode.style.border='3px solid red'

}

var buttonTag =document.querySelector('.cd')

buttonTag.onclick =function (){
    console.log("button tag");

  var ulTag = document.querySelector('#ul');
  ulTag.firstElementChild.style.background='yellow'
  ulTag.lastElementChild.style.background='red';

  ulTag.childNodes[2].style.background='blue'

}