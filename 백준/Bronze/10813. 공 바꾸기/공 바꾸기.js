const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("example.txt").toString().trim().split("\n");

let [ch1, ch2] = [0, 0];
const [first, second] = input[0].split(" ").map((x) => Number(x));
let a = [];
let b = "";
for (let i = 1; i <= first; i++) {
  a[i] = i;
}
for (let i = 1; i <= second; i++) {
  const ch = input[i].split(" ");
  const temp = a[ch[0] - 0];
  a[ch[0] - 0] = a[ch[1] - 0];
  a[ch[1] - 0] = temp;
}

for (let i = 1; i <= first; i++) {
  b += a[i] + " ";
}
console.log(b);
