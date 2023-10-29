const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const number = input[0].split("\n");
const a = input[1].split(" ");
const b = [];
let max = 0;
let sum = 0.0;

for (i = 0; i < number; i++) {
  if (parseInt(a[i]) > max) max = a[i];
}
for (i = 0; i < number; i++) {
  b[i] = (a[i] / max) * 100;
  sum += b[i];
}
console.log(sum / number);
