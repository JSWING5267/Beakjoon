var input = require("fs").readFileSync(0).toString().split("\n");
//var input = require("fs").readFileSync("example.txt").toString().split("\n");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

if (a > 0) {
  if (b > 0) {
    console.log("1");
  } else console.log("4");
} else {
  if (b > 0) {
    console.log("2");
  } else console.log("3");
}
