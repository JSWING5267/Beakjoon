let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//let input = fs.readFileSync("example.txt").toString().trim().split("\n");
let sum = 0;

for (let i = 1; i <= input[0]; i++) {
  sum += i;
}
console.log(sum);