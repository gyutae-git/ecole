const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  const N = parseInt(input);
  const arr = input.slice(1, N + 1).map(Number);

  // 선택 정렬
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  arr.forEach(val => console.log(val));
});
