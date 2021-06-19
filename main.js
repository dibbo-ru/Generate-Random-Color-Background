const colors =["A","B","C","D",1,2,3,4,5,6,7,8,9];
//for example #f125325
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
let hexcolor = '#';
for(let i = 0 ; i < 6 ; i++){
  hexcolor += colors[getRandomNumber()];
}   
    console.log(getRandomNumber())
    document.body.style.backgroundColor = hexcolor;
    color.textContent= hexcolor;
});

function getRandomNumber(){
return Math.floor(Math.random()* colors.length);    
} 