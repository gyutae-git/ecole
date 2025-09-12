const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const N = parseInt(input[0]);
  const A = input[1].split(' ').map(Number);

  A.sort((a, b) => a - b);

  let count = 0;
  for (let k = 0; k < N; k++) {
    let i = 0;
    let j = N - 1;

    while (i < j) {
      if (i === k) {
        i++;
        continue;
      }
      if (j === k) {
        j--;
        continue;
      }

      const sum = A[i] + A[j];
      if (sum === A[k]) {
        count++;
        break;
      } else if (sum < A[k]) {
        i++;
      } else {
        j--;
      }
    }
  }

  console.log(count);
});
