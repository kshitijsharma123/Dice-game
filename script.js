const btnRoll1 = document.querySelector(".btn--roll");
const currentScore2 = document.querySelector("#current--1");
const currentScore1 = document.querySelector("#current--0");
const dice = document.querySelector(".dice");
const btnHold = document.querySelector(".btn--hold");
const btnNewGame = document.querySelector(".btn--new");
const score1P = document.querySelector("#score--0");
const score2P = document.querySelector("#score--1");
const divPlayer0 = document.querySelector("#name--0");
const divPlayer1 = document.querySelector("#name--1");
dice.classList.add("hidden");

let player = 1;
let score1 = 0;
let score2 = 0;
let amount1 = 0;
let amount2 = 0;

btnRoll1.addEventListener("click", () => {
  if (player === 1) {
    let number = Math.floor(Math.random() * 6) + 1;
    if (number === 1) {
      dice.src = `dice-${number}.png`;

      score1 = 0;
      currentScore1.textContent = score1;
      player = 2;
    } else {
      score1 += number;
      dice.src = `dice-${number}.png`;
      currentScore1.textContent = score1;
    }
  } else if (player === 2) {
    let number = Math.floor(Math.random() * 6) + 1;
    if (number === 1) {
      dice.src = `dice-${number}.png`;

      score2 = 0;
      currentScore2.textContent = score2;
      player = 1;
    } else {
      score2 += number;
      dice.src = `dice-${number}.png`;
      currentScore2.textContent = score2;
    }
  }
});

// Hold btn

btnHold.addEventListener("click", () => {
  if (player === 1) {
    amount1 += score1 * 1;
    score1P.textContent = amount1;
    if (amount1 >= 100) {
      divPlayer0.textContent = "Winner";
      console.log("it is working ");
    }
    score1 = 0;
    currentScore1.textContent = 0;
    player = 2;
  } else if (player === 2) {
    amount2 += score2 * 1;
    if (amount2 >= 100) {
      divPlayer1.textContent = "Winner";
      console.log("it is working ");
    }
    score2P.textContent = amount2;
    score2 = 0;
    currentScore2.textContent = 0;

    player = 1;
  }
});

btnNewGame.addEventListener("click", () => {
  amount1 = 0;
  amount2 = 0;
  score1 = 0;
  score2 = 0;
  currentScore1.textContent = score1;
  currentScore2.textContent = score2;
  score1P.textContent = amount1;
  score2P.textContent = amount2;
  player = 1;
});
