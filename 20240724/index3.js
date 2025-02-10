let nums = [1, 2, 3, 4];
let numsQuad = [];

const log = (text) => text.map((t) => console.log(t));

const quad = (num) => num ** 2;

function quadF(num) {
  return num ** 2;
}

numsQuad = nums.map(quadF);
//console.log(numsQuad);

//log(numsQuad);

console.log(numsQuad[numsQuad.length - 1]);
