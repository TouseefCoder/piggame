var scores, roundScores, activePlayer, gamePlaying;

init();

var lastDice;

document.querySelector(".roll-dice").addEventListener("click", () => {
  if (gamePlaying) {
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);
    var dice3 = Math.floor(Math.random() * 6 + 1);

    document.getElementById("dice-1").style.display = "block";
    document.getElementById("dice-2").style.display = "block";
    document.getElementById("dice-3").style.display = "block";
    document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
    document.getElementById("dice-2").src = "dice-" + dice2 + ".png";
    document.getElementById("dice-3").src = "dice-" + dice3 + ".png";

    // if (dice === 6 && lastDice === 6) {
    //   scores[activePlayer] = 0;
    //   document.querySelector("#score-" + activePlayer).textContent = "0";
    // }

    if (dice1 !== 1 && dice2 !== 1 && dice3 !== 1) {
      roundScores += dice1 + dice2 + dice3;
      document.querySelector("#scores-" + activePlayer).textContent =
        roundScores;
    } else {
      nextPlayer();
    }

    // lastDice = dice;
  }
});

document.querySelector(".hold-dice").addEventListener("click", function () {
  if (gamePlaying) {
    scores[activePlayer] += roundScores;

    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    var input;
    input = document.querySelector(".final-score").value;
    var winningScore;
    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    if (scores[activePlayer] >= winningScore) {
      document.getElementById("player-" + activePlayer).textContent = "Winner!";
      document.getElementById("dice-1").style.display = "none";
      document.getElementById("dice-2").style.display = "none";
      document.getElementById("dice-3").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScores = 0;

  document.getElementById("scores-0").textContent = 0;
  document.getElementById("scores-1").textContent = 0;

  document.querySelector(".left").classList.toggle("active");
  document.querySelector(".right").classList.toggle("active");

  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
  document.getElementById("dice-3").style.display = "none";
}

document.querySelector(".newgame").addEventListener("click", function () {
  init();
});

function init() {
  scores = [0, 0];
  roundScores = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
  document.getElementById("dice-3").style.display = "none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("scores-0").textContent = "0";
  document.getElementById("scores-1").textContent = "0";
  document.getElementById("player-0").textContent = "PLAYER 1";
  document.getElementById("player-1").textContent = "PLAYER 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.add("active");
}
