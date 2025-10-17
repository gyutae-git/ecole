import java.io.*;
import java.util.*;

public class B21568 {
    static long x, y, d;

    static void exGcd(long a, long b) {
        if (b == 0) {
            x = 1;
            y = 0;
            d = a;
            return;
        }
        exGcd(b, a % b);
        long nx = y;
        long ny = x - (a / b) * y;
        x = nx;
        y = ny;
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        long A = Long.parseLong(st.nextToken());
        long B = Long.parseLong(st.nextToken());
        long C = Long.parseLong(st.nextToken());

        exGcd(A, B);
        if (C % d != 0) {
            System.out.println(-1);
            return;
        }
        long k = C / d;
        System.out.println(x * k + " " + y * k);
    }
}
