function playCraps() {
  console.log("playCraps() started");
  var die1 = Math.ceil(Math.random() * 6);

  var die2 = Math.ceil(Math.random() * 6);

  var sum = die1 + die2;
  document.getElementById("die1Res").innerHTML = die1;
  document.getElementById("die2Res").innerHTML = die2;
  document.getElementById("sumRes").innerHTML = sum;
  if (sum == 7 || sum == 11) {
    document.getElementById("finalRes").innerHTML = "CRAPS - you lose";
  } else if (die1 == die2 && die1 % 2 == 0) {
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
