const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const queue = new Array(N);
let front = 0, rear = N;

for(let i=0; i<N; i++) {
  queue[i] = i+1;
}

while(rear - front > 1){
  front++;            // 바닥에 버림
  queue[rear++] = queue[front++]; // 맨뒤로 넣음
}

console.log(queue[front]);
