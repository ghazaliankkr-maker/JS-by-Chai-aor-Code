let value = 3
let negValue = -value
console.log(negValue)
 console.log(2+3)
 console.log(40-2)
 console.log(3*3);
 console.log(20/3);
 console.log(2%3);

let str1 = "hello"
let str2 = "world"
let str3 = str1 + str2
console.log(str3);

console.log("2" + 2)
console.log(2 + "3");
console.log("2" + "3")
console.log("3" + "4");
console.log("3" + 2 + 4);
console.log(2 + 3 + "3");
console.log(3*9-(3+3) - "3");
console.log(3*9-(3+3) + "3");
console.log(typeof(3*9-(3+3) - "3"));
// console.log(typeof(3*9-(3+3) + "3"));   This shows error if we put + before string 3 instead of - , but just above one don't show error

console.log(true);
console.log(+true);
// console.log(true+);     this shows error
console.log(+ "");
console.log(typeof true);

// let num1 , num2, num3
// num1=num2=num3=4    this is not readable code

let gameCounter = 100
++gameCounter
console.log(gameCounter);
