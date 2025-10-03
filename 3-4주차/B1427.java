import java.util.*;

public class B1427 {
    public static void main(String args[]){
        Scanner in = new Scanner(System.in);
        
        String snum = in.nextLine();
        in.close();

        Integer[] arr = new Integer[snum.length()];
        for(int i=0; i<snum.length(); i++){
            arr[i] = snum.charAt(i)-'0'; 
        }

        Arrays.sort(arr, Collections.reverseOrder());

        for (int i : arr) {
            System.out.print(i);
        }
    }
}

