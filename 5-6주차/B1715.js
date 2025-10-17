const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const N = input[0];
const arr = input.slice(1);

class MinHeap {
  constructor() { this.h = []; }
  push(x) {
    this.h.push(x);
    let i = this.h.length - 1;
    while (i > 0) {
      let p = (i - 1) >> 1;
      if (this.h[p] <= this.h[i]) break;
      [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
      i = p;
    }
  }
  pop() {
    if (this.h.length === 1) return this.h.pop();
    const root = this.h[0];
    this.h[0] = this.h.pop();
    let i = 0;
    while (true) {
      let l = i * 2 + 1, r = i * 2 + 2, min = i;
      if (l < this.h.length && this.h[l] < this.h[min]) min = l;
      if (r < this.h.length && this.h[r] < this.h[min]) min = r;
      if (min === i) break;
      [this.h[i], this.h[min]] = [this.h[min], this.h[i]];
      i = min;
    }
    return root;
  }
  size() { return this.h.length; }
}

const heap = new MinHeap();
for (const x of arr) heap.push(x);

let ans = 0;
while (heap.size() > 1) {
  const a = heap.pop(), b = heap.pop();
  ans += a + b;
  heap.push(a + b);
}
console.log(ans);
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const N = input[0];
const arr = input.slice(1);

// 최소 힙 구현
class MinHeap {
  constructor() { this.h = []; }
  push(x) {
    this.h.push(x);
    let i = this.h.length - 1;
    while (i > 0) {
      let p = (i - 1) >> 1;
      if (this.h[p] <= this.h[i]) break;
      [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
      i = p;
    }
  }
  pop() {
    if (this.h.length === 1) return this.h.pop();
    const root = this.h[0];
    this.h[0] = this.h.pop();
    let i = 0;
    while (true) {
      let l = i * 2 + 1, r = i * 2 + 2, min = i;
      if (l < this.h.length && this.h[l] < this.h[min]) min = l;
      if (r < this.h.length && this.h[r] < this.h[min]) min = r;
      if (min === i) break;
      [this.h[i], this.h[min]] = [this.h[min], this.h[i]];
      i = min;
    }
    return root;
  }
  size() { return this.h.length; }
}

const heap = new MinHeap();
for (const x of arr) heap.push(x);

let ans = 0;
while (heap.size() > 1) {
  const a = heap.pop(), b = heap.pop();
  ans += a + b;
  heap.push(a + b);
}
console.log(ans);
s