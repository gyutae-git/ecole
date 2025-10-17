import heapq
import sys
input = sys.stdin.readline

N = int(input())
heap = [int(input()) for _ in range(N)]
heapq.heapify(heap)

ans = 0
while len(heap) > 1:
    a = heapq.heappop(heap)
    b = heapq.heappop(heap)
    ans += a + b
    heapq.heappush(heap, a + b)

print(ans)
