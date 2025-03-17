// 5) Use loops to print patterns like a triangle or square.
import java.util.*;
public class Question5 {
    

    public static void squarePattern(int n){
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void trianglePattern(int n){

        for (int i = 0; i < n; i++) {

            for (int j = n; j >= i; j--) { 
                System.out.print(" "); 
            } 
            for (int j = 0; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number of rows: ");
        int rows = sc.nextInt();

        System.out.println("Display the square pattern:");
        squarePattern(rows);

        System.out.println("Display the triangle pattern:");
        trianglePattern(rows);



        sc.close();
        
    }
    
}
