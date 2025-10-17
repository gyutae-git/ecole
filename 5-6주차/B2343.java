import java.io.*;
import java.util.*;

public class B2343 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int[] arr = new int[N];
        st = new StringTokenizer(br.readLine());
        int left = 0, right = 0;
        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
            left = Math.max(left, arr[i]);
            right += arr[i];
        }
        while (left <= right) {
            int mid = (left + right) / 2;
            int count = 1, sum = 0;
            for (int x : arr) {
                if (sum + x > mid) {
                    count++;
                    sum = 0;
                }
                sum += x;
            }
            if (count > M)
                left = mid + 1;
            else
                right = mid - 1;
        }
        System.out.println(left);
    }
}
