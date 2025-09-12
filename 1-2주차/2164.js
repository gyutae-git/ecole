const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputLines = [];

rl.on('line', (line) => {
  inputLines.push(line);
});

rl.on('close', () => {
  const N = parseInt(inputLines[0]);
  const queue = new Array(N);
  let front = 0, rear = N;

  for(let i = 0; i < N; i++) {
    queue[i] = i + 1;
  }

  while(rear - front > 1) {
    front++;                  // 바닥에 버림
    queue[rear++] = queue[front++]; // 맨 뒤로 넣음
  }

  console.log(queue[front]);
});
