// Primitive data type includes Number, String, Symbol, BigInt, Null, Undefined and boolean
// Non primitive or refernce data type includes  Function, Object and Array 
// Symbol data type is used to make some value unique
// JS is dynamically typed language because it automatically assigns value to variable
// In JS there is no special data type for integer. We use number data type for it

// Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);
console.log('----------------------------------');

// bigInt
const bigNumber = 3333333333333333333333333333333333333333333333n
console.log(bigNumber);
console.log(typeof bigNumber);
console.log('---------------------------------');

// Arrays
const heroes = ['ali', 'akram', 'ahmad']
console.log(heroes);
console.log(typeof heroes);
console.log('---------------------------------');

// object
let myObject = {
    fullName : 'Ahmad khan',
    rollNo : '3333',
    subjectName : 'chemistry',
    marksGain : 64
}
console.log(myObject);
console.log(typeof myObject);
console.log('---------------------------------');

// Functions
const myFunction = function(){
    console.log("this is function")
}
console.log(myFunction);
console.log(typeof myFunction);

// Array, objects and functions all have object data types. While function data type has object function data type.