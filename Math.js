// Math is by default in JS

// Below function makes the negative and positive both positive
console.log(Math.abs(4));
console.log(Math.abs(-4));

console.log('------------------------------------');

// To round off the digit after decimal
console.log(Math.round(4.6));
console.log(Math.round(4.4));

// To move the value to the next one
console.log(Math.ceil(4.2));
console.log(Math.ceil(4.6));

console.log('------------------------------------');

// To move the value to the back
console.log(Math.floor(4.3));
console.log(Math.floor(4.6));
console.log(Math.floor(8.9));

console.log(Math.sqrt(256));
console.log(Math.min(3.5,23,233,5,1,33));

console.log('------------------------------------');

// Random ranges from 0 to 1
console.log(Math.random());
// To move it ahead from 0 we multiply it by 10
console.log(Math.random()*10);
// // Now to remove 0, add 1 to the above line 
console.log((Math.random()* 10)+1);
// // Now to fix the range
const min = 10
const max = 20
console.log(((Math.random()*10)+1)+min);
