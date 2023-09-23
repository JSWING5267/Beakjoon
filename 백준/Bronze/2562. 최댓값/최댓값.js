const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("example.txt").toString().trim().split("\n");

let max = -1;
let maxint = 0;
for (let i = 0; i <= 8; i++) {
  if (parseInt(input[i]) > max) {
    max = input[i];
    maxint = i + 1;
  }
}
console.log(max + "\n" + maxint);
