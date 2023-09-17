const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("example.txt").toString().trim().split("\n");

for (let i = 0; true; i++) {
  const numbers = (input[i] || "").split(" ");
  if (numbers[0] == 0 && numbers[1] == 0) {
    break;
  }
  console.log(parseInt(numbers[0]) + parseInt(numbers[1]));
}
