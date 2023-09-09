var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
//var input = require("fs").readFileSync("example.txt").toString().split(" ");
var a = parseInt(input[0]);

if (a % 4 == 0) {
  if (a % 100 !== 0 || a % 400 == 0) {
    console.log("1");
  } else console.log("0");
} else console.log("0");
