import sys
from collections import deque

input = sys.stdin.readline

n, l = map(int, input().split())
nums = list(map(int, input().split()))

dq = deque()
result = []

for i in range(n):
    num = nums[i]

    while dq and dq[-1][0] > num:
        dq.pop()
    dq.append((num, i))

    if dq[0][1] <= i - l:
        dq.popleft()

    result.append(dq[0][0])

print(' '.join(map(str, result)))
