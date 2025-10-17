const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let idx = 0;
const N = input[idx++], M = input[idx++];
const arr = input.slice(idx, idx + N);

let left = Math.max(...arr);
let right = arr.reduce((a, b) => a + b, 0);

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let cnt = 1, sum = 0;
  for (const x of arr) {
    if (sum + x > mid) {
      cnt++;
      sum = 0;
    }
    sum += x;
  }
  if (cnt > M) left = mid + 1;
  else right = mid - 1;
}
console.log(left);
