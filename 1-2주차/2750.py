N = int(input())
arr = [int(input()) for _ in range(N)]

for i in range(N - 1):
    for j in range(i + 1, N):
        if arr[i] > arr[j]:
            arr[i], arr[j] = arr[j], arr[i]

for val in arr:
    print(val)
