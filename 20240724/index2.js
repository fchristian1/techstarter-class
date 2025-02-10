function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  if (a < 1 || b < 1) {
    return;
  }
  return a / b;
}

let a = 4;
let b = 3;
console.log(a, "+", b, "=", add(a, b));
console.log(a, "-", b, "=", sub(a, b));
console.log(a, "*", b, "=", mul(a, b));
console.log(a, "/", b, "=", div(a, b));
