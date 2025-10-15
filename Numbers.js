const score = 200
console.log(score);
console.log(typeof score);

// To explicitly initialize the data type of Number
const balance = new Number(100)
console.log(balance);

console.log('--------------------------------------------------');

// It changes the data type from string into the number
console.log(balance.toString());
console.log(typeof balance);

// Below line tells the length of converted string length
console.log(balance.toString().length);

// Below line fixes the digits after decimal point
console.log(balance.toFixed(2));

console.log('--------------------------------------------------');

// The below line confines the digit to three decimal 
const otherNumber = 23.9493
console.log(otherNumber.toPrecision(3));

// The below line confines the digit to four decimal
const otherNumb = 23.4493
console.log(otherNumb.toPrecision(4));

const otherNum = 233.9493
console.log(otherNum.toPrecision(3));

const otherNu = 2333.9493
console.log(otherNu.toPrecision(3));

console.log('--------------------------------------------------');

// To make the number easy to read
const hundreds = 10000000
console.log(hundreds.toLocaleString());
const hundred = 10000000
// console.log(hundred.toLocaleString(en-IN));

