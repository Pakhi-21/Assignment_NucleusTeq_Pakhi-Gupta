// 4) Write a program to print the Fibonacci sequence up to a specified number
import java.util.*;
public class Question4 {

    public static void fibonacci(int n){
        int n1=0;
        int n2=1;

        for (int i = 0; i < n; i++) {
            // Print the number
            System.out.print(n1 + " ");

            // Swap
            int n3 = n1 + n2;
            n1 = n2;
            n2 = n3;
        }
    }
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number of terms: ");
        int num = sc.nextInt();

        fibonacci(num);
        
        sc.close();
    }
    
}
