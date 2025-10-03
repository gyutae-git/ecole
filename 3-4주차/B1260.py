import sys
from collections import deque
input = sys.stdin.readline

N, M, V = map(int, input().split())
graph = [[] for _ in range(N+1)]
for _ in range(M):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

for adj in graph:
    adj.sort()

visited = [False] * (N+1)

def dfs(start):
    visited[start] = True
    print(start, end=' ')
    for nxt in graph[start]:
        if not visited[nxt]:
            dfs(nxt)

def bfs(start):
    queue = deque([start])
    visited[start] = True
    while queue:
        node = queue.popleft()
        print(node, end=' ')
        for nxt in graph[node]:
            if not visited[nxt]:
                visited[nxt] = True
                queue.append(nxt)

dfs(V)
print()
visited = [False] * (N+1)
bfs(V)
