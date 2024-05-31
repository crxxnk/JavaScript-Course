//* USEFUL INFORMATION

//? We can manually convert a number to a string by using:
String(25)
//? We can also manually convert a string to a number by using:
Number('25')

//! If we subtract, divide or multiply a string with a number,
//! it will automatically convert the string to a number.
console.log('25'- 5);

//! If we add a string to a number, 
//! it will automatically convert the number to a string
//* The result will be similar to if we added 2 sentences together.
//? They will appear next to each other. In this case, it will be 255.
console.log('25' + 5);

//? Window represents the browser, so everything is inside the window.
//? It even includes the inspector window.
//! We don't need to use window, as JavaScript adds it automatically.
window.console.log('Window')
window.alert
window.document

//? As for document, it represents the entire HTML page.
//? Basically, everything that is visible without 'researching'
//? and pressing buttons is inside the document.
//! Document.querySelector allows us to select an element from the page.
document.querySelector('button');

//*------------------------------------------------------------------------//

const subBtnElement = document.querySelector('.sub-btn');
/**
 *? When called, the 'Subscribe' button will change to 'Subscribed'.
 *? In this case, we call the function on button click.*/
function subscribe() {
  if (subBtnElement.innerText === 'Subscribe') {
    subBtnElement.innerHTML = 'Subscribed';
  } else if (subBtnElement.innerHTML === 'Subscribed') {
    subBtnElement.innerHTML = 'Subscribe';
  }
}

/**
 *? When called, it calculates the total cost.
 *? If the cost is less than 40, it adds 10 to it.
 *? In this case, we call the function on button click.*/
function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  if (cost < 40) {
    cost += 10;
  }
  document.querySelector('.js-total-cost').innerHTML = `Total Cost: $${cost}`;
}

/**
 *? It is called on key down and it checks if the key is 'Enter'.
 *? If it is indeed 'Enter' it calls the function that calculates the cost*/
function handleCostKeyDown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}