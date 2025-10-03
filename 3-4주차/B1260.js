const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
for(let i=1; i<=M; i++){
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}
for(let i=1; i<=N; i++){
    graph[i].sort((a, b) => a - b);
}

const visited = new Array(N + 1).fill(false);

function dfs(node){
    visited[node] = true;
    process.stdout.write(node + ' ');
    for(const nxt of graph[node]){
        if(!visited[nxt]){
            dfs(nxt);
        }
    }
}

function bfs(start){
    const queue = [];
    queue.push(start);
    visited[start] = true;

    while(queue.length > 0){
        const node = queue.shift();
        process.stdout.write(node + ' ');
        for(const nxt of graph[node]){
            if(!visited[nxt]){
                visited[nxt] = true;
                queue.push(nxt);
            }
        }
    }
}

dfs(V);
console.log();
visited.fill(false);
bfs(V);
