const createBoard = function () {
  const gameBoard = document.getElementById("game-board");
  for (let i = 1; i <= 90; i++) {
    const gameCell = document.createElement("div");
    gameCell.classList.add("game-cell");
    const number = document.createElement("h3");
    number.innerText = i;
    gameCell.appendChild(number);
    gameBoard.appendChild(gameCell);
  }
};

const playerTabGen = function () {
  const playerNums = [];
  const playerZone = document.getElementById("player-zone");
  const playerTab = document.createElement("div");
  playerTab.classList.add("player-tab");
  let i = 0;
  while (i < 24) {
    const randomNumber = Math.floor(Math.random() * 90) + 1;
    if (!playerNums.includes(randomNumber)) {
      const numberCell = document.createElement("div");
      numberCell.classList.add("game-cell");
      const number = document.createElement("h2");
      number.classList.add("player-num");
      number.innerText = randomNumber;
      numberCell.appendChild(number);
      playerTab.appendChild(numberCell);
      playerNums.push(randomNumber);
      i++;
    }
  }
  playerZone.appendChild(playerTab);
};

window.addEventListener("DOMContentLoaded", createBoard());
// Parte dinamica
const extrBtn = document.getElementById("random-number");

const randomNumbers = [];

const extractNum = function () {
  const randomNumber = Math.floor(Math.random() * 90) + 1;
  const number = document.getElementById("number");
  if (!randomNumbers.includes(randomNumber)) {
    /*     number.classList.add("number");
      number.innerHTML = "";
      number.innerText = randomNumber;
   */
    const numbers = document.getElementsByClassName("game-cell");
    const extractedNumber = numbers[randomNumber - 1];
    extractedNumber.classList.add("extracted-number");

    const playerNums = document.getElementsByClassName("player-num");
    for (let i = 0; i < playerNums.length; i++) {
      const currentNum = parseInt(playerNums[i].innerText);
      if (currentNum === randomNumber) {
        playerNums[i].parentElement.classList.add("extracted-number");
      }
    }
    randomNumbers.push(randomNumber);
  } else if (randomNumbers.length === 90) {
    return;
  } else {
    return extractNum();
  }
};

const playBtn = document.getElementById("play");

playBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const tabNum = document.getElementById("tab-num").value;
  if (tabNum > 10) {
    alert("Puoi avere massimo 10 tabelline!");
    return;
  } else {
    const form = document.getElementById("quantita-tabelline");
    const extrZone = document.getElementById("extraction-zone");
    const extrBtn = document.createElement("button");
    extrBtn.id = "random-number";
    extrBtn.innerText = "ESTRAZIONE";
    extrZone.appendChild(extrBtn);
    extrBtn.addEventListener("click", extractNum);
    for (let i = 0; i < tabNum; i++) {
      playerTabGen();
    }
    form.remove(form);
  }
});
