let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//let input = fs.readFileSync("example.txt").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  const numbers = input[i].split(" ");

  console.log(parseInt(numbers[0]) + parseInt(numbers[1]));
}
