const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const counting = new Array(10001).fill(0);

for (let i = 1; i <= N; i++) {
    const num = Number(input[i]);
    counting[num]++;
}

let output = "";
for (let i = 0; i < counting.length; i++) {
    for (let j = 0; j < counting[i]; j++) {
        output += i + "\n";
    }
}

process.stdout.write(output);
