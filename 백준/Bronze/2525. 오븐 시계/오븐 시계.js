var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
//var input = require("fs").readFileSync("example.txt").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
//var input = require("fs").readFileSync("example.txt").toString().split("\n");
var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
var c = parseInt(input[1]);
var d = b + c;

if (d >= 60) {
  var e = parseInt(d / 60);
  console.log((a + e) % 24, d % 60);
} else console.log(a, d);
