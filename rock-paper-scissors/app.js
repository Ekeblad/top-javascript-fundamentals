const selection = ["ROCK", "PAPER", "SCISSORS"];
let roundResult = "";

playerScore = 0;
computerScore = 0;

//UI import
const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
const currentScore = document.getElementById("currentScore");
const playerClicked = document.getElementById("playerSelection");
const computerClicked = document.getElementById("computerSelection");
const endgameModal = document.getElementById("endgameModal");
const endgameMsg = document.getElementById("endgameMsg");
const overlay = document.getElementById("overlay");
const restartBtn = document.getElementById("restartBtn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleClick(btn.dataset.clicked);
  });
});

restartBtn.addEventListener("click", restartGame);
overlay.addEventListener("click", closeEndgameModal);

function computerPlay() {
  const randomise = Math.floor(Math.random() * 3);
  return selection[randomise];
}

function handleClick(playerSelection) {
  const computerSelection = computerPlay(selection);
  playRound(playerSelection, computerSelection);

  if (playerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    endgameMsg.textContent = "You won!";
    openEndgameModal();
  }

  if (computerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    endgameMsg.textContent = "You lost...";
    openEndgameModal();
  }
}

function playRound(player, computer) {
  playerClicked.textContent = player;
  computerClicked.textContent = computer;

  if (player === computer) {
    roundResult = "TIE";
  } else if (
    (player === "ROCK" && computer === "SCISSORS") ||
    (player === "PAPER" && computer === "ROCK") ||
    (player === "SCISSORS" && computer === "PAPER")
  ) {
    playerScore++;
    roundResult = "WIN";
  } else {
    computerScore++;
    roundResult = "LOSE";
  }
  result.textContent = "Result: " + roundResult;
  currentScore.textContent =
    "Player " + playerScore + " - " + computerScore + " Computer";

  return roundResult;
}

function openEndgameModal() {
  endgameModal.classList.add("active");
  overlay.classList.add("active");
}

function closeEndgameModal() {
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}

function restartGame() {
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
  playerScore = 0;
  computerScore = 0;
}
