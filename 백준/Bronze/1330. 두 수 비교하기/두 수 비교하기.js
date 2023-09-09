var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
//var input = require("fs").readFileSync("example.txt").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

if (a > b) console.log(">");
if (a == b) console.log("==");
if (a < b) console.log("<");
