import sys

input = sys.stdin.readline

C = int(input())
stack = []
result = []
tmp = 1
possible = True

for _ in range(C):
    N = int(input())

    while tmp <= N:
        stack.append(tmp)
        result.append('+')
        tmp += 1

    if stack[-1] == N:
        stack.pop()
        result.append('-')
    else:
        possible = False
        break

if possible:
    print('\n'.join(result))
else:
    print('NO')
