const selection = ["Rock", "Paper", "Scissors"];
let roundResult = "";

function computerPlay () {
    const randomise = (Math.floor(Math.random() * 3));
    return selection[randomise];
}

function playerPlay () {
    const selectedItem = prompt("Select Rock, Paper or Scissors?");
    return selectedItem;
}

function playRound (player, computer) {
    player = player.toUpperCase();
    computer = computer.toUpperCase();
    console.log("Player chose: " + player);
    console.log("Computer chose: " + computer);

    
    if (player === computer) {
        console.log("We selected the same alternative, no winners");
        roundResult = "TIE";
    
    } else if   ((player === "ROCK" && computer === "SCISSORS") ||
                 (player === "PAPER" && computer === "ROCK") ||
                 (player === "SCISSORS" && computer === "PAPER")) {
            roundResult = "Player Won";
    } else   {
        roundResult = "Computer Won";
    }
    console.log(roundResult);

    return roundResult;
}


const computerSelection = computerPlay(selection);
const playerSelection = playerPlay(selection);
let roundWinner = playRound(playerSelection, computerSelection);




