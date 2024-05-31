const product = {
    name: 'Rick Owens Boots',
    price: 2500
};

console.log(product);
console.log(product.name);
console.log(product.price);

const product2 = {
    name: 'shirt',
    'delivery-time': '1 day',
    rating: {
        stars: 4.5,
        count: 87
    },
    fun: function function1() {
        console.log('function inside object');
    }
};

console.log(product2['delivery-time']);
console.log(product2.rating.count);

console.log(JSON.stringify(product2));

const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));

console.log('hello'.length);
console.log('hello'.toUpperCase());

const object1 = {
    message: 'hello'
};
const object2 = object1;

object1.message = 'Good job';
console.log(object1);
console.log(object2);

const object3 = {
    message: 'Good job'
};

console.log(object3 === object1);
console.log(object2 === object1);

const object4 = {
    message: 'Good job',
    price: 799
};
//const message = object4.message; 
//const price = object4.price;
//to parakatw kanei 2 variables se ena line:
const {message, price} = object4;
console.log(message);
console.log(price);

const object5 = {
    /*message: message h an exei to idio onoma 
    to variable kai to property:*/
    message,
    /*method: function function1() {
        console.log('method');
    } or: */
    method() {
        console.log('method')
    }
};
console.log(object5);
object5.method();


//Heads or Tails

let score = JSON.parse(localStorage.getItem('score')) || 
{
  Wins: 0,
  Losses: 0,
  Ties: 0
};

let result = '';

function headsTails() {
    let computerMove = '';
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber <= 1 / 2) {
      computerMove = 'heads';
    } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 2) {
      computerMove = 'tails';
    }
    return computerMove;
  }

  function playGame(playerMove) {
    const computerMove = headsTails();
  
    if (playerMove === 'heads') {
      if (computerMove === 'heads') {
        result = 'Tie.';
      } else if (computerMove === 'tails') {
        result = 'You win.';
      }
    } else if (playerMove === 'tails') {
      if (computerMove === 'tails') {
        result = 'Tie.'
      } else if (computerMove === 'heads') {
        result = 'You lose.';
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
  
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} 
  Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`)
  }

  function resetScore() {
    score.Wins = 0;
    score.Losses = 0;
    score.Ties = 0;
    localStorage.removeItem('score');
    alert('Score Reset');
  }