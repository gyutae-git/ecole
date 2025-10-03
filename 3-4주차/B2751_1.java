import java.io.*;
import java.util.*;

public class B2751_1 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int N = Integer.parseInt(br.readLine());
        int[] arr = new int[N];

        int idx = 0;
        while (idx < N) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            while (st.hasMoreTokens() && idx < N) {
                arr[idx++] = Integer.parseInt(st.nextToken());
            }
        }

        Arrays.sort(arr);

        for (int num : arr) {
            sb.append(num).append('\n');
        }

        System.out.print(sb.toString());
    }
}
