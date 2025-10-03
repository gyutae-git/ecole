import java.util.*;

public class B11004_1 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int N = in.nextInt();
        int K = in.nextInt();
        int[] arr = new int[N];
        
        for (int i = 0; i < N; i++) {
        arr[i] = in.nextInt();
        }
        
        in.close();

        System.out.println(quickSelect(arr, 0, N-1, K-1));
    }
    
    public static int quickSelect(int[] arr, int left, int right, int K){
        int pivot = arr[(left+right)/2];
        int l = left, r = right;
        while(l <= r){
            while(arr[l] < pivot) l++;
            while(arr[r] > pivot) r--;
            if(l <= r){
                int temp = arr[l];
                arr[l] = arr[r];
                arr[r] = temp;
                l++; r--;
            }
        }
        if(K <= r) return quickSelect(arr, left, r, K);
        if(K >= l) return quickSelect(arr, l, right, K);
        return arr[K];
    }
}
