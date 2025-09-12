const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  const N = parseInt(input[0]);
  const a = input[1];
  let sum = 0;

  for (let i = 0; i < N; i++) {
    sum += Number(a[i]);
  }
  console.log(sum);
});
