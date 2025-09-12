const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const C = parseInt(input[0]);
const stack = [];
const result = [];
let tmp = 1;
let index = 1;
let possible = true;

for(let i = 0; i < C; i++){
    const N = parseInt(input[index++]);

    while(tmp <= N){
        stack.push(tmp++);
        result.push('+');
    }

    if(stack[stack.length - 1] === N){
        stack.pop();
        result.push('-');
    } else {
        possible = false;
        break;
    }
}

if(possible){
    console.log(result.join('\n'));
} else {
    console.log('NO');
}