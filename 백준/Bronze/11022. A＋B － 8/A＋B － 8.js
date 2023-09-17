const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("example.txt").toString().trim().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let number = input[i].split(" ");
  const A = parseInt(number[0]);
  const B = parseInt(number[1]);
  console.log("Case #" + i + ": " + A + " + " + B + " = " + parseInt(A + B));
}
