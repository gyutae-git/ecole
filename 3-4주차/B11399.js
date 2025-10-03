const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b);

let sum = 0, wtime = 0;
for (const i of arr) {
    sum += wtime + i;
    wtime += i;
}

console.log(sum);
