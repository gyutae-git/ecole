def exgcd(a, b):
    if b == 0:
        return (1, 0, a)
    x1, y1, g = exgcd(b, a % b)
    return (y1, x1 - (a // b) * y1, g)

A, B, C = map(int, input().split())
x, y, g = exgcd(A, B)
if C % g != 0:
    print(-1)
else:
    k = C // g
    print(x * k, y * k)
s