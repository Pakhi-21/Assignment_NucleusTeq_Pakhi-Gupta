
import java.util.Scanner;

public class Q2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter first number: ");
        int a = scanner.nextInt();
        System.out.print("Enter second number: ");
        int b = scanner.nextInt();

    
        System.out.println("\nArithmetic Operators +,-,/,*,%:");
        System.out.println("Division: " + (a / b));
        System.out.println("Modulus: " + (a % b));

        
        System.out.println("\nRelational Operators ==,+=,!=,>,<,>=,<=:");
        System.out.println("a != b: " + (a != b));
        System.out.println("a > b: " + (a > b));
        System.out.println("a <= b: " + (a <= b));

      
        boolean x = true, y = false;
        System.out.println("\nLogical Operators: ||, && ,!");
        System.out.println("x AND y: " + (x && y));
        System.out.println("x OR y: " + (x || y));
        System.out.println("NOT x: " + (!x));

        System.out.println("\nBitwise Operators &,|,^,<<,>>");
        System.out.println("a != b: " + (a | b));
        System.out.println("a > b: " + (a ^ b));
        System.out.println("a <= b: " + (a & b));
        

        System.out.println("\nTernary Opertor ? :");
        int age= 27;
        String result = (age > 18) ? "allowed" : "not allowed";
        System.out.println(result);


        scanner.close();
    }
}
