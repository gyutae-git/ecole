const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = '';

rl.on('line', (line) => {
  input = line.trim();
  rl.close();
}).on('close', () => {
  const n = parseInt(input);
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum > n) break;
      else if (sum === n) {
        answer++;
        break;
      }
    }
  }

  console.log(answer);
});
