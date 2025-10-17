const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let idx = 0;
const N = input[idx++];
const A = input.slice(idx, idx + N);
idx += N;

A.sort((a, b) => a - b);

const M = input[idx++];
const targets = input.slice(idx, idx + M);

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return true;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}

let result = "";
for (const t of targets) {
    result += (binarySearch(A, t) ? "1\n" : "0\n");
}

console.log(result.trim());
