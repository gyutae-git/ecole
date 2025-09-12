import sys

input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))

A.sort()

count = 0
for k in range(N):
    i = 0
    j = N - 1
    while i < j:
        if i == k:
            i += 1
            continue
        if j == k:
            j -= 1
            continue

        sum_ = A[i] + A[j]
        if sum_ == A[k]:
            count += 1
            break
        elif sum_ < A[k]:
            i += 1
        else:
            j -= 1

print(count)
