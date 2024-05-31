const subBtnElement = document.querySelector('.sub-btn');
function subscribe() {
  if (subBtnElement.innerText === 'Subscribe') {
    subBtnElement.innerHTML = 'Subscribed';
    subBtnElement.classList.add('sub-btn-active');
  } else if (subBtnElement.innerHTML === 'Subscribed') {
    subBtnElement.innerHTML = 'Subscribe';
    subBtnElement.classList.remove('sub-btn-active');
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  if (cost < 40) {
    cost += 10;
  }
  document.querySelector('.js-total-cost').innerHTML = `Total Cost: $${cost}`;
}

function handleCostKeyDown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}