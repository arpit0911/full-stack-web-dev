let gameSeq = [];
let playerSeq = [];
let tiles = ["red", "green", "blue", "yellow"];
let isGameStated = false;
let level = 0;

let levelBoard = document.getElementById("level-board");
let startBtn = document.getElementById("start-btn");

// start the game if not started
startBtn.addEventListener("click", function () {
  if (!isGameStated) {
    startBtn.classList.remove("rainbow-btn");

    setTimeout(function () {
      isGameStated = true;
      levelUp();
    }, 1000);
  }
});

// flash button'
function gameFlash(btn) {
  btn.classList.add("game-flash");
  setTimeout(() => {
    btn.classList.remove("game-flash");
  }, 100);
}

function playerFlash(btn) {
  btn.classList.add("player-flash");
  setTimeout(() => {
    btn.classList.remove("player-flash");
  }, 100);
}

// level up
function levelUp() {
  playerSeq = [];
  level++;
  levelBoard.innerText = `Level ${level}`;

  let randomInx = Math.floor(Math.random() * 3);
  let tileColor = tiles[randomInx];
  let tile = document.querySelector(`.${tileColor}`);
  gameSeq.push(tileColor);
  gameFlash(tile);
}
// Check the sequence
function checkAns(index) {
  if (gameSeq[index] === playerSeq[index]) {
    if (gameSeq.length === playerSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    levelBoard.innerHTML = `Game Over! you score <b>${level}</b> Press any key to Restart`;
    document.querySelector("body").style.backgroundColor = "#A0153E";

    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "#222831";
    }, 150);
    resetGame();
  }
}

function btnPress() {
  if (isGameStated) {
    playerFlash(this);
    let btn = this;

    let playerColor = btn.getAttribute("id");
    playerSeq.push(playerColor);
    checkAns(playerSeq.length - 1);
  }
}

let allBtns = document.querySelectorAll(".box");
for (const btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function resetGame() {
  isGameStated = false;
  level = 0;
  gameSeq = [];
  playerSeq = [];
  startBtn.classList.add("rainbow-btn");
}
