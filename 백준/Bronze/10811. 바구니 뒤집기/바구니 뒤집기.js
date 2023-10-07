const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [first, second] = input[0].split(" ").map((x) => Number(x));

let bascket = [];

for (let i = 0; i < first; i++) bascket[i] = i + 1;

for (let i = 1; i <= second; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  let temp = [];

  for (let j = a - 1; j < b; j++) {
    temp.push(bascket[j]);
  }
  temp.reverse();
  bascket.splice(a - 1, b - a + 1, ...temp);
}

console.log(bascket.join(" "));
