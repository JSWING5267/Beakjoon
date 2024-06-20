const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());
const graph = input.map((v) => v.split(" ").map((v) => +v));
const visited = Array.from({ length: n }, () => new Array(n).fill(0));

let queue = [];
queue.push([0, 0]);
visited[0][0] = 1;

let answer = "Hing";
while (queue.length > 0) {
  let [y, x] = queue.shift();
  let v = graph[y][x];
  if (v === -1) {
    answer = "HaruHaru";
    break;
  } else {
    if (y + v < n && !visited[y + v][x]) {
      visited[y + v][x] = true;
      queue.push([y + v, x]);
    }
    if (x + v < n && !visited[y][x + v]) {
      visited[y][x + v] = true;
      queue.push([y, x + v]);
    }
  }
}
console.log(answer);
