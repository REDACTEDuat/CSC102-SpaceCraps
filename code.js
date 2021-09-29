function playCraps() {
  //Put in log that the function has started.
  console.log("playCraps() started");
  //Initializes both die varriables with a number betwen 0 and 1, multiplied by 6 and rounded up. Then it creates a variable of the die 1 and 2 added together.
  var die1 = Math.ceil(Math.random() * 6);
  var die2 = Math.ceil(Math.random() * 6);
  var sum = die1 + die2;
  //Writes all the varriables to the wwbsite
  document.getElementById("die1Res").innerHTML = die1;
  document.getElementById("die2Res").innerHTML = die2;
  document.getElementById("sumRes").innerHTML = sum;
  //Creates the lose parameters. You lose if you have 7 or 11.
  if (sum == 7 || sum == 11) {
    document.getElementById("finalRes").innerHTML = "CRAPS - you lose";
  }
  //Creates the win conditions. You win if both die are both even and the same number. If the die are not 7 or 11; or doubles, then you draw.
  else if (die1 == die2 && die1 % 2 == 0) {
    document.getElementById("finalRes").innerHTML = "DOUBLES - you win";
  } else {
    document.getElementById("finalRes").innerHTML = "Draw - you did not win or lose, please try again.";
  }
}

function blastOff() {
  var currTime = 50;
  document.getElementById("countDownTimer").innerHTML = currTime;
  setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = currTime;
  }, 5000);
  setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = currTime;
  }, 10000);
  setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = currTime;
  }, 15000);
  setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = currTime;
  }, 20000);
  setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = currTime;
  }, 25000);
  setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = currTime;
  }, 30000);
  setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = currTime;
  }, 35000);
  setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = currTime;
  }, 40000);
  setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = currTime;
  }, 45000);
  setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = "Blastoff";
  }, 50000);
}
