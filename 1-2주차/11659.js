const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  const [n, m] = input[0].split(' ').map(Number);
  const numbers = input[1].split(' ').map(Number);

  const arr = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    arr[i + 1] = arr[i] + numbers[i];
  }

  for (let i = 0; i < m; i++) {
    const [a, b] = input[2 + i].split(' ').map(Number);
    console.log(arr[b] - arr[a - 1]);
  }
});
