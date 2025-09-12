n = int(input())
answer = 0

for length in range(1, n + 1):
    numerator = n - (length * (length - 1) // 2)
    if numerator <= 0:
        break
    if numerator % length == 0:
        answer += 1

print(answer)
