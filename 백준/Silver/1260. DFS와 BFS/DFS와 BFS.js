const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m, start] = input[0].split(" ").map(Number);
const graph = Array.from(Array(n + 1), () => new Array(n + 1).fill(0));
for (let i = 1; i <= m; i++) {
  let [row, column] = input[i].split(" ").map(Number);
  graph[row][column] = 1;
  graph[column][row] = 1;
}

let visitdfs = new Array(n + 1).fill(0);
const dfsarr = [];

dfs(start);
function dfs(now) {
  visitdfs[now] = 1;
  dfsarr.push(now);
  for (let i = 1; i < graph.length; i++) {
    if (graph[now][i] === 1 && visitdfs[i] === 0) {
      dfs(i);
    }
  }
}

let visitbfs = new Array(n + 1).fill(0);
const bfsarr = [];

bfs(start);
function bfs(now) {
  let queue = [];
  visitbfs[now] = 1;
  bfsarr.push(now);
  queue.push(now);
  while (queue.length !== 0) {
    let v = queue.shift();
    for (let i = 1; i < graph.length; i++) {
      if (graph[v][i] === 1 && visitbfs[i] === 0) {
        visitbfs[i] = 1;
        queue.push(i);
        bfsarr.push(i);
      }
    }
  }
}
console.log(dfsarr.join(" "));
console.log(bfsarr.join(" "));
