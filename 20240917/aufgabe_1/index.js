const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
const [_, fruit2, fruit3, ...rest] = fruits;

//console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
console.log(rest);

const scores = [85, 90];

const [math, sience, english = 75] = scores;

console.log(math);
console.log(sience);
console.log(english);
