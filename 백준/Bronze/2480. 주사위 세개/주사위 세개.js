var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
//var input = require("fs").readFileSync("example.txt").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

if (a == b && b == c) {
  console.log(10000 + a * 1000);
} else if (a == b && b != c) {
  console.log(1000 + a * 100);
} else if (b == c && a != c) {
  console.log(1000 + b * 100);
} else if (a == c && b != c) {
  console.log(1000 + a * 100);
} else {
  var max = Math.max(a, b, c);
  console.log(max * 100);
}
