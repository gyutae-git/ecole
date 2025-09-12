import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        int[] A = new int[N];
        
        for (int i = 0; i < N; i++) {
            A[i] = sc.nextInt();
        }
        
        // 배열 정렬
        Arrays.sort(A);

        int count = 0;
        for (int k = 0; k < N; k++) {
            int i = 0;
            int j = N - 1;
            
            while (i < j) {
                if (i == k) i++;
                else if (j == k) j--;
                else {
                    int sum = A[i] + A[j];
                    if (sum == A[k]) {
                        count++;
                        break;
                    } else if (sum < A[k]) {
                        i++;
                    } else {
                        j--;
                    }
                }
            }
        }
        
        System.out.println(count);
        sc.close();
    }
}
