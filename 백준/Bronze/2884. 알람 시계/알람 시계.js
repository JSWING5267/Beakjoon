var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
//var input = require("fs").readFileSync("example.txt").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

if (b >= 45) {
  console.log(a, b - 45);
} else {
  if (a > 0) console.log(a - 1, b + 15);
  else console.log(23, b + 15);
}
