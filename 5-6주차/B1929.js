const fs = require('fs');
const [M, N] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const prime = Array(N + 1).fill(true);
prime[0] = prime[1] = false;

for (let i = 2; i * i <= N; i++) {
  if (prime[i]) {
    for (let j = i * i; j <= N; j += i) {
      prime[j] = false;
    }
  }
}

let output = [];
for (let i = M; i <= N; i++) {
  if (prime[i]) output.push(i);
}
console.log(output.join('\n'));
