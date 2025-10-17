const fs = require('fs');
let n = BigInt(fs.readFileSync(0, 'utf8').trim());
let result = n;
for (let i = 2n; i * i <= n; i++) {
  if (n % i === 0n) {
    while (n % i === 0n) n /= i;
    result -= result / i;
  }
}
if (n > 1n) result -= result / n;
console.log(result.toString());
