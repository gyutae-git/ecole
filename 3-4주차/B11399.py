N = int(input())
arr = list(map(int, input().split()))
arr.sort()

sum = 0
wtime = 0
for i in arr:
    sum += wtime + i
    wtime += i

print(sum)
