const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("example.txt").toString().trim().split("\n");

for (let i = 0; true; i++) {
  const numbers = (input[i] || "").trim().split(" ");
  if (numbers == "") {
    break;
  }
  console.log(parseInt(numbers[0]) + parseInt(numbers[1]));
}
