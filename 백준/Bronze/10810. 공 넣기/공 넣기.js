const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const a = [];
let b = "";
let numbers = input[0].split(" ").map((x) => Number(x));
for (let i = 0; i <= numbers[0] - 1; i++) {
  a[i] = 0;
}

for (let i = 1; i <= numbers[1]; i++) {
  let move = input[i].split(" ").map((x) => Number(x));
  for (let j = move[0] - 1; j <= move[1] - 1; j++) {
    a[j] = move[2];
  }
}
for (let i = 0; i <= numbers[0] - 1; i++) {
  b += a[i] + " ";
}
console.log(b.trim());
