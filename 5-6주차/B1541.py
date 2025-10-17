expr = input().strip()
parts = expr.split('-')
nums = []

for part in parts:
    s = sum(map(int, part.split('+')))
    nums.append(s)

result = nums[0] - sum(nums[1:])
print(result)
