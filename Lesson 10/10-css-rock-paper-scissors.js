//!Shortcut of the below if statement

let score = JSON.parse(localStorage.getItem('score')) ||
{
  Wins: 0,
  Losses: 0,
  Ties: 0
};

/*
 if (!score or score === null) {
  score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
  };
}
*/

updateScoreElement();

let result = '';

function updateScoreElement() {
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`
}

function pickComputerMove() {
  let computerMove = '';
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber <= 3 / 3) {
    computerMove = 'scissors';
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.'
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.'
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  }

  if (result === 'You win.') {
    score.Wins += 1;
  } else if (result === 'You lose.') {
    score.Losses += 1;
  } else if (result === 'Tie.') {
    score.Ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You 
  <img class="move-icon" src="Icons/${playerMove}-emoji.png">
  <img class="move-icon" src="Icons/${computerMove}-emoji.png">
  Computer`;
}

function resetScore() {
  score.Wins = 0;
  score.Losses = 0;
  score.Ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}