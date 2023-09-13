const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("example.txt").toString().trim().split("\n");
let sum = 0;

for (let i = 2; i <= parseInt(input[1]) + 1; i++) {
  let money = input[i].split(" ");
  sum += parseInt(money[0]) * parseInt(money[1]);
}
if (sum == input[0]) console.log("Yes");
else console.log("No");
