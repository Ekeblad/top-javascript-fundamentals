const selection = ["ROCK", "PAPER", "SCISSORS"];
let roundResult = "";
const buttons = document.querySelectorAll("button");
playerScore = 0;
computerScore = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleClick(btn.dataset.clicked);
  });
});

function computerPlay() {
  const randomise = Math.floor(Math.random() * 3);
  console.log(randomise);
  return selection[randomise];
}

function handleClick(playerSelection) {
  const computerSelection = computerPlay(selection);
  playRound(playerSelection, computerSelection);
}

function playRound(player, computer) {
  console.log("Player chose: " + player);
  console.log("Computer chose: " + computer);

  if (player === computer) {
    console.log("We selected the same alternative, no winners");
    roundResult = "TIE";
  } else if (
    (player === "ROCK" && computer === "SCISSORS") ||
    (player === "PAPER" && computer === "ROCK") ||
    (player === "SCISSORS" && computer === "PAPER")
  ) {
    console.log((roundResult = "Player Won"));
    playerScore++;
  } else {
    console.log((roundResult = "Computer Won"));
    computerScore++;
  }
  return roundResult;
}
