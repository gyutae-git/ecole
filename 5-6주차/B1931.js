const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const N = input[0];
const arr = [];
for (let i = 1; i < input.length; i += 2) {
  arr.push([input[i], input[i + 1]]);
}

arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let cnt = 0, end = 0;
for (const [s, e] of arr) {
  if (s >= end) {
    end = e;
    cnt++;
  }
}
console.log(cnt);
