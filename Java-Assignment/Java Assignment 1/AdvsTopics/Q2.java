import java.util.*;

public class Q2 {
    public static void main(String[] args) {


        Scanner scanner = new Scanner(System.in);

        try {
            System.out.print("Enter a number : ");
            String i = scanner.next();
            int n= Integer.parseInt(i); 
            System.out.println("Converted number: " + n);

            int arr[] = {10, 20, 30};
            System.out.print("Enter index : ");
            int idx = scanner.nextInt();
            System.out.println("Value at index :"  + arr[idx]);

        }
        catch (NumberFormatException e) { 
            System.out.println("Invalid number format! Please enter integer.");

        }
        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index is out of bounds!");

        } 
        finally {
            System.out.println("Execution completed.");
            scanner.close();
        }
    }
}