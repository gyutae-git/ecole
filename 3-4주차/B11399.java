import java.util.*;

public class B11399 {
    public static void main(String args[]){
        Scanner in = new Scanner(System.in);

        int N = in.nextInt();
        int[] arr = new int[N];

        for (int i = 0; i < N; i++) {
        arr[i] = in.nextInt();
        }
        
        in.close();
        Arrays.sort(arr);

        int sum = 0, wtime = 0;
        for(int i :arr){
            sum +=  wtime + i;
            wtime += i;
        }

        System.out.print(sum);
    }
}

