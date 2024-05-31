console.log(document.querySelector('.js-9a'))

function changeText() {
  const textElement = document.querySelector('.js-9b');
  if (textElement.innerText === '9b') {
    textElement.innerHTML = '9b done!';
  } else {
    textElement.innerHTML = '9b';
  }
}

function headsTails(pick) {
  let pickText = document.querySelector('.js-pick');
  pickText.innerHTML = `You picked ${pick}`;
}

function showName() {
  const nameElement = document.querySelector('.js-name');
  const text = document.querySelector('.js-name-text');
  text.innerHTML = `Your name is ${nameElement.value}`;
}

function showNameKey(event) {
  if (event.key === 'Enter') {
    showName();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  //! Convert the numbers to cents by * 100.
  let cost = Number(inputElement.value) * 100;

  if (cost < 4000) {
    cost += 1000;
  }
  //! Convert back to dollars at the end.
  document.querySelector('.js-total-cost').innerHTML = `Total Cost: $${cost / 100}`;
}

function handleCostKeyDown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function updateText() {
  const inputText = document.querySelector('.js-text')
  const textPar = document.querySelector('.js-text-par')
  textPar.innerHTML = inputText.value;
}

let cartQuantity = 0;
const cartText = document.querySelector('.js-quantity');
function updateCartQuantity(change) {
  if (cartQuantity + change > 10) {
    cartText.innerHTML = 'The cart is full.'
    return;
  }

  if (cartQuantity + change < 0) {
    cartText.innerHTML = 'Not enough items in the cart'
    return;
  }

  cartQuantity += change;
  cartText.innerHTML = `Cart quantity: ${cartQuantity}`;
}

let calculation = localStorage.getItem('calculation') || '';

      // Display the calculation when the page first loads.
      displayCalculation();

      function updateCalculation(value) {
        calculation += value;

        // Display the calculation on the page
        // instead of console.log
        displayCalculation();

        localStorage.setItem('calculation', calculation);
      }

      function displayCalculation() {
        document.querySelector('.js-calculation')
          .innerHTML = calculation;
      }