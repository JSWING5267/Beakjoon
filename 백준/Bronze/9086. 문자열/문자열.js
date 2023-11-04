const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const t = input[0];

for (i = 1; i <= t; i++) {
  // input[i].trim()을 사용해서  \r 제거
  // 개행문자 때문에 length가 하나 늘어나는 것 방지(문제 제출시에는 상관 없음)
  let str = input[i].trim();

  let End = str.length - 1;

  console.log(
    input[i].substring(0, 1) + input[i].substring(End, input[i].length)
  );
  // console.log(input[i].charAt(0) + input[i].charAt(End));
}
