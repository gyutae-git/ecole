const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const N = parseInt(input[0]);
const arr = input.slice(1, N + 1).map(Number);

arr.sort((a, b) => a - b);

for (const num of arr) {
    console.log(num);
}
