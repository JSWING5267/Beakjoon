const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("example.txt").toString().trim().split("\n");
let sum = "";

for (let i = 1; i <= input[0]; i++) {
  for (let j = 1; j <= input[0] - i; j++) {
    sum += " ";
  }
  for (let j = 1; j <= i; j++) {
    sum += "*";
  }
  console.log(sum);
  sum = "";
}
