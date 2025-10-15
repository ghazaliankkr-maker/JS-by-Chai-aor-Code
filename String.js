const name = 'Rizwan khan'
const myRepo = 40
console.log(name + myRepo);
// The above is not recommended

// Recommended and readable way
console.log(`Hello, I am ${name}. I am using github with ${myRepo} repositories.`);

// String initialization (Modern way)
const myCourse = new  String('Mathematics')

// Position of the string
console.log(myCourse[0]);

// output is object
console.log(myCourse.__proto__);

// length of the string
console.log(myCourse.length);

console.log(myCourse.toUpperCase());
console.log(myCourse.toLowerCase());
console.log(myCourse.toLocaleLowerCase());

// To find the character position
console.log(myCourse.charAt(3));
console.log(myCourse.indexOf('s'));

const gameName = new String('Math-new-sub')
const byIndex = gameName.substring(0,4)
console.log(byIndex);
// But in the substring there is no negative range

const anoString = gameName.slice(-7, -1)
// In negative case, starting from left side
console.log(anoString);

// const anotherString = gameName.slice(-1, -8)     This is not correct way of slicing in negative case
const anotherString = gameName.slice(4 , 9)
console.log(anotherString);

const removeOption = "    articficial   "
console.log(removeOption);
console.log(removeOption.trim());
// the above function is used to remove spaces

const url = " https://aminkhan.com/amin%20choudry"
console.log(url.replace('%20','-'));

// To find the name in the url
console.log(url.includes('aminkhan'));
console.log(url.includes('junadikhan'));

// To make it split
console.log(gameName.split('-'));


