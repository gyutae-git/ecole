import sys
input = sys.stdin.readline

N, M = map(int, input().split())
arr = list(map(int, input().split()))

left, right = max(arr), sum(arr)
while left <= right:
    mid = (left + right) // 2
    cnt, total = 1, 0
    for x in arr:
        if total + x > mid:
            cnt += 1
            total = 0
        total += x
    if cnt > M:
        left = mid + 1
    else:
        right = mid - 1
print(left)
