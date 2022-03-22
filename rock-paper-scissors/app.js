const selection = ["Rock", "Paper", "Scissors"];
let roundResult = "";
playerScore = 0;
computerScore = 0;

function computerPlay() {
  const randomise = Math.floor(Math.random() * 3);
  return selection[randomise];
}

function playerPlay() {
  const selectedItem = prompt("Select Rock, Paper or Scissors?");
  return selectedItem;
}

function playRound(player, computer) {
  player = player.toUpperCase();
  computer = computer.toUpperCase();
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

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay(selection);
    const playerSelection = playerPlay(selection);
    playRound(playerSelection, computerSelection);
  }
}

// const computerSelection = computerPlay(selection);
// const playerSelection = playerPlay(selection);
game();

console.log(playerScore + " - " + computerScore);
