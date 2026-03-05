let balance = 500;

function playGame(){

let bet = parseInt(document.getElementById("betAmount").value);
let choice = document.getElementById("color").value;

if(!bet || bet <= 0){
alert("Enter a bet");
return;
}

if(bet > balance){
alert("Not enough money");
return;
}

let resultColor = Math.random() < 0.5 ? "red" : "black";

let wheel = document.getElementById("wheel");

wheel.style.background = resultColor;
wheel.innerText = resultColor.toUpperCase();

if(choice === resultColor){
balance += bet;
document.getElementById("result").innerText = "You WON $" + bet;
}else{
balance -= bet;
document.getElementById("result").innerText = "You LOST $" + bet;
}

document.getElementById("balance").innerText = "Balance: $" + balance;

if(balance <= 0){
document.getElementById("gameOver").classList.remove("hidden");
}

}

function restartGame(){

balance = 500;

document.getElementById("balance").innerText = "Balance: $500";
document.getElementById("result").innerText = "";
document.getElementById("wheel").style.background = "#333";
document.getElementById("wheel").innerText = "?";

document.getElementById("gameOver").classList.add("hidden");

}