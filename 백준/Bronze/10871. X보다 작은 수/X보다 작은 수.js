const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const numbers = input[1].trim().split(" ");
const numbers2 = input[0].trim().split(" ");
let sum = "";
for (let i = 0; i <= numbers2[0] - 1; i++) {
  if (parseInt(numbers[i]) < parseInt(numbers2[1])) {
    sum += numbers[i] + " ";
  }
}
console.log(sum);
