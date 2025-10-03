s = input().strip()
arr = [int(c) for c in s]
arr.sort(reverse=True)
print(''.join(map(str, arr)))
