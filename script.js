let balance = 500;

function playGame(){

let bet = parseInt(document.getElementById("betAmount").value);
let colorChoice = document.getElementById("color").value;

if(bet > balance || bet <= 0){
alert("Invalid bet amount!");
return;
}

let random = Math.random();
let resultColor;

if(random < 0.5){
resultColor = "red";
}else{
resultColor = "black";
}

let resultText = "Result: " + resultColor;

if(colorChoice === resultColor){
balance += bet;
resultText += " — You WON $" + bet;
}else{
balance -= bet;
resultText += " — You LOST $" + bet;
}

document.getElementById("balance").innerText = "Balance: $" + balance;
document.getElementById("result").innerText = resultText;

if(balance <= 0){
document.getElementById("gameOver").classList.remove("hidden");
}

}

function restartGame(){

balance = 500;

document.getElementById("balance").innerText = "Balance: $500";
document.getElementById("result").innerText = "";

document.getElementById("gameOver").classList.add("hidden");

}