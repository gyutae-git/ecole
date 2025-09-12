import sys
input = sys.stdin.readline

n, m = map(int, input().split())
numbers = list(map(int, input().split()))

arr = [0] * (n + 1)
for i in range(n):
    arr[i + 1] = arr[i] + numbers[i]

for _ in range(m):
    a, b = map(int, input().split())
    print(arr[b] - arr[a - 1])
