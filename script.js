function randomNumber() {
  return( Math.floor( Math.random() * 6 ) + 1 );
}
var img1 = document.querySelectorAll('img')[0];
var img2 = document.querySelectorAll('img')[1];

var num1 = randomNumber();
var num2 = randomNumber();

img1.setAttribute("src","images/dice"+num1+".png");
img2.setAttribute("src","images/dice"+num2+".png");

if (num1>num2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (num1<num2){
  document.querySelector("h1").textContent = "Player 2 Wins!";
}else{
  document.querySelector("h1").textContent = "Draw";
}
