var randomNumber1=Math.floor(((Math.random())*6)+1);
var image1=document.querySelectorAll("img")[0];
switch(randomNumber1){
    case 1:
        image1.setAttribute("src","images/dice1.png");
        break;
    case 2:
        image1.setAttribute("src","images/dice2.png");
        break;
    case 3:
        image1.setAttribute("src","images/dice3.png");
        break;
    case 4:
        image1.setAttribute("src","images/dice4.png");
        break;
    case 5:
        image1.setAttribute("src","images/dice5.png");
        break;
    case 6:
        image1.setAttribute("src","images/dice6.png");
        break;
}


var randomNumber2=Math.floor(((Math.random())*6)+1);
var image2=document.querySelectorAll("img")[1];
switch(randomNumber2){
    case 1:
        image2.setAttribute("src","images/dice1.png");
        break;
    case 2:
        image2.setAttribute("src","images/dice2.png");
        break;
    case 3:
        image2.setAttribute("src","images/dice3.png");
        break;
    case 4:
        image2.setAttribute("src","images/dice4.png");
        break;
    case 5:
        image2.setAttribute("src","images/dice5.png");
        break;
    case 6:
        image2.setAttribute("src","images/dice6.png");
        break;
}






if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent="🚩Player 1 wins!";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").textContent="🚩Player 2 wins!";
}
else{
  document.querySelector("h1").textContent="Draw!";
}
