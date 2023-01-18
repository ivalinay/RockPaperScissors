function rockPaperScissors() {
  const rock = "Rock";
  const paper = "Paper";
  const scissors = "Scissors";

  let playerTurn = Math.floor(Math.random() * 3) + 1;
  let computerRandomNumber =Math.floor(Math.random() * 3) +1;

  if (playerTurn == "r" || playerTurn == "rock") {
    playerTurn = "Rock";
  } else if (playerTurn == "p" || playerTurn == "paper") {
    playerTurn = "Paper";
  } else if (playerTurn == "s" || playerTurn == "scissors") {
    playerTurn = "Scissors";
  } else {
    console.log(`Invalid Input. Try Again...`);
  }
  switch(computerRandomNumber){
    case 1:
        computerRandomNumber = 'Rock';
        break;
        case 2:
            computerRandomNumber = 'Paper';
            break;
            case 3:
                computerRandomNumber = 'Scissors';
                break;
  }
  console.log(`The computer chooses ${computerTurn}`);
  if((playerTurn === rock && computerTurn === scissors) ||
  (playerTurn === paper && computerTurn ===rock) || (playerTurn === scissors && computerTurn === paper)){
    console.log(`You win!`);
  }else if (){
    console.log(`You lose!`);
  }
  else{
    console.log(`This game was a draw!`);
  }
}
rockPaperScissors();
