// Stack memory: Used in primitive data type. It gives you copy value
// Heap memory: Used in non primitive data type. It gives you refernce or original value
// For Example
let myYoutubeChannel = "Rizwan khan"
let anonterChannel = myYoutubeChannel
anonterChannel = "Aslam khan"
console.log(myYoutubeChannel);
console.log(anonterChannel);

let userOne = {
    email : "userOne@gmail.com",
    regNumber : 33333333
}
let userTwo = userOne
// The above line means userTwo gains the exact value of userOne shown in diagram on notebook

// To access to Object elements
userTwo.email = "userOne@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
// So the above two lines get access to the same email
