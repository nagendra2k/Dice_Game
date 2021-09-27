var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".image1").setAttribute("src","dice"+randomNumber1+".png");

var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".image2").setAttribute("src","dice"+randomNumber2+".png");


if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML = "🚩player 1 have won the game";
}
else if(randomNumber1 < randomNumber2){
document.querySelector("h1").innerHTML = "player 2 have won the game🚩";
}
else{
  document.querySelector("h1").innerHTML = "The game is draw";
}
