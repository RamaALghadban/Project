
let navbar= document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=() =>{
     navbar.classList.toggle('active');
     searchForm.classList.remove('active');  
     cartItem.classList.remove('active');
}

let searchForm= document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=() =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');  
    cartItem.classList.remove('active');
}

let cartItem= document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick=() =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');  
}
window.onscroll =()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');  
    cartItem.classList.remove('active');
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlidess");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block"; 
   
}
{/* <script type="text/javascript"> */}
var counter =1;
setInterval(function(){
    document.getElementById('radio' + counter ).checked = true;
    counter++
    if(counter>6){
        counter=1;
    }
},2000);

let list =document.querySelectorAll('.list');
let itemBox =document.querySelectorAll('.itemBox');
for(let i =0;i<list.length;i++)
{
  list[i].addEventListener('click',function()
  {
console.log(list[i])

    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove('active');
      console.log(list[j]);
    }
    console.log(itemBox);
    this.classList.add('active');
    console.log(2);
    let dataFilter= this.getAttribute('data-filter');
    for (let k = 0; k < itemBox.length; k++) {
      console.log(k)
      itemBox[k].classList.remove('active');
     itemBox[k].classList.add('hide');
     console.log(5);
     if(itemBox[k].getAttribute('data-item')==dataFilter||
     dataFilter== "all"){
      itemBox[k].classList.remove('hide');
      itemBox[k].classList.add('active');
     }
      console.log(dataFilter);
    }
  })
}