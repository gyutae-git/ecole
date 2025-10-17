const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let idx = 0;
const T = input[idx++];

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

let result = [];
for (let i = 0; i < T; i++) {
  const a = input[idx++], b = input[idx++];
  const g = gcd(a, b);
  result.push((a * b) / g);
}
console.log(result.join('\n'));
s