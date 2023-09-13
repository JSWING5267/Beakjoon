const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("example.txt").toString().trim().split("\n");

for (let i = 1; i <= parseInt(input[0]) / 4; i++) {
  process.stdout.write("long ");
}
process.stdout.write("int");
