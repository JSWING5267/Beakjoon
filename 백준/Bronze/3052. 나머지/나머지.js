const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("example.txt").toString().trim().split("\n");

let a = [];
for (let i = 0; i <= 41; i++) {
  a[i] = false;
}

for (let i = 0; i <= 9; i++) {
  a[parseInt(input[i]) % 42] = true;
}

let cnt = 0;
for (let i = 0; i <= 41; i++) {
  if (a[i] == true) {
    cnt++;
  }
}
console.log(cnt);
