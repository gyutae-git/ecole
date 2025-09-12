const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, l] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

const deque = [];
const result = [];

for (let i = 0; i < n; i++) {
  const num = nums[i];

  while (deque.length > 0 && deque[deque.length - 1][0] > num) {
    deque.pop();
  }
  deque.push([num, i]);

  if (deque[0][1] <= i - l) {
    deque.shift();
  }
  result.push(deque[0][0]);
}

console.log(result.join(' '));
