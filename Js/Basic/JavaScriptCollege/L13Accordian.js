//Event handler

var h1= document.querySelector('.head');
h1.onclick =function (){

    console.log(this);
    if(this.nextElementSibling.style.display=="none"){
       
        this.nextElementSibling.style.display="block"
    }
    else{
        this.nextElementSibling.style.display="none"
    }
}