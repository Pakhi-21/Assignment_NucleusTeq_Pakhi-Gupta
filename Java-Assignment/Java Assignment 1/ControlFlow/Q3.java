import java.util.Scanner;

public class Q3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a no.:");
        int num = sc.nextInt();
        
        System.out.println("Table for " + num + ":");
        for (int i = 1; i <= 10; i++) {
            System.out.println(num + "X" + i + " = " + (num * i));
        }
        
        sc.close();
    }
}