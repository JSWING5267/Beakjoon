const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const numbers = input[1].trim().split(" ");
let sum = 0;
for (let i = 0; i <= input[0] - 1; i++) {
  if (numbers[i] == input[2]) {
    sum++;
  }
}
console.log(sum);
