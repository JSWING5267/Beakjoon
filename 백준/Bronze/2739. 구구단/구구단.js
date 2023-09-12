var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
//var input = require("fs").readFileSync("example.txt").toString().split(" ");
var a = parseInt(input[0]);

for (var i = 1; i <= 9; i++) {
  console.log(a, "*", i, "=", a * i);
}
