import java.io.*;

public class B1541 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] parts = br.readLine().split("-");
        int sum = 0;
        for (int i = 0; i < parts.length; i++) {
            int temp = 0;
            for (String s : parts[i].split("\\+"))
                temp += Integer.parseInt(s);
            if (i == 0)
                sum += temp;
            else
                sum -= temp;
        }
        System.out.println(sum);
    }
}
