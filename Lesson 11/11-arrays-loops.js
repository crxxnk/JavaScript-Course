const myArray = [10, 20, 30];
console.log(myArray);

//* 0 means the first value of the array, 1 means the second value, etc.
console.log(myArray[0]);

//? Changes the first value of the array to 100
myArray[0] = 100;
console.log(myArray);

const secondArray = [
  1, 'hello world', true, 
  {name: 
    'socks', 
    price: 100
  }, [1, 2, 3]];

console.log(secondArray);
console.log(typeof secondArray);

//? Checks wheter it's an array or not.
console.log(Array.isArray(secondArray));

//* Checks the length of the array(the number of values inside it).
console.log(secondArray.length);

//? Adds a value to the end of the array.
secondArray.push(50);
console.log(secondArray);

//? Removes a value from the array(the first number is the index of the value you want to remove.
//? The second number is how many values you want to remove continuing from the index that was assigned).
secondArray.splice(0, 2)
console.log(secondArray);