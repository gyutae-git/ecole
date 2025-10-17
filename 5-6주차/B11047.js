const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(v => v.trim());
const [N, K] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number);
let k = K, count = 0;

for (let i = N - 1; i >= 0; i--) {
  if (k >= coins[i]) {
    count += Math.floor(k / coins[i]);
    k %= coins[i];
  }
}
console.log(count);
