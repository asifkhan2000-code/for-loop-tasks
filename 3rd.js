const prompt = require("prompt-sync")();
let sum = 0;
console.log("odd numbers from 91 to 129: ")
for (let i = 91; i <= 129; i+=2) {
    console.log(i);
    sum = sum + i;
}
console.log("Sum of all the odd numbers from 91 to 129:",sum);

sum = 0;
console.log("even numbers from 51 to 85: ")
for (let i = 51; i <= 85; i++) {
    if(i % 2 === 0) {
        console.log(i);
        sum = sum + i;
    }
}
console.log("Sum of all the even numbers from 51 to 85:",sum);