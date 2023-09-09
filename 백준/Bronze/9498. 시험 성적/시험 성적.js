var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
//var input = require("fs").readFileSync("example.txt").toString().split(" ");
var a = parseInt(input[0]);

if (100 >= a && a >= 90) console.log("A");
if (89 >= a && a >= 80) console.log("B");
if (79 >= a && a >= 70) console.log("C");
if (69 >= a && a >= 60) console.log("D");
if (59 >= a) console.log("F");
