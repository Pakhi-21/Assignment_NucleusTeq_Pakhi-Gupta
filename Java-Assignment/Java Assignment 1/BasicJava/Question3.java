// 3) Implement a program to find the factorial of a given number.


import java.util.*;

public class Question3 {
    
    public static int factorial(int n){
        if(n==1){
            return 1;
        }

        return n*factorial(n-1);
        
    }
    public static void main(String[] args) {
        
        System.out.println("Enter a number:");
        Scanner sc = new Scanner(System.in);
        int num=sc.nextInt();

        int ans=factorial(num);

        System.out.println("Factorial of a number is "+ans);

        sc.close();
    
    }
    
}

