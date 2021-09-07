
var randomNo=Math.random()*6 +1;
randomNo=Math.floor(randomNo);

var diceImage="images/dice"+randomNo+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",diceImage);


var randomNo1=Math.random()*6 +1;
randomNo1=Math.floor(randomNo1);
var diceImage="images/dice"+randomNo1+".png";
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",diceImage);


if(randomNo===randomNo1)
{
  document.querySelector("h1").innerText="Draw";
}
else if(randomNo>randomNo1)
{
  document.querySelector("h1").innerText="Player 1 wins";
}
else
{
  document.querySelector("h1").innerText="Player 2 wins";
}
