from collections import deque
import sys

input = sys.stdin.readline
N = int(input())

queue = deque(range(1, N + 1))

while len(queue) > 1:
    queue.popleft()         # 바닥에 버리기
    queue.append(queue.popleft())  # 맨 뒤에 넣기

print(queue[0])
