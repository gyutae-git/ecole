def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return True
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return False

N = int(input())
A = list(map(int, input().split()))
A.sort()

M = int(input())
targets = list(map(int, input().split()))

for t in targets:
    print(1 if binary_search(A, t) else 0)
