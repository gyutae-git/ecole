const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const parts = input.split('-').map(part =>
  part.split('+').reduce((a, b) => a + Number(b), 0)
);
const result = parts[0] - parts.slice(1).reduce((a, b) => a + b, 0);
console.log(result);
