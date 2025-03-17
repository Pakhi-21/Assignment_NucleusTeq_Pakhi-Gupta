// 2) Create a program to check if a number is even or odd.

import java.util.*;
public class Question2 {
    public static void main(String[] args) {
        
        System.out.println("Enter a number:");
        Scanner sc = new Scanner(System.in);
        int num=sc.nextInt();

        if(num%2==0){
            System.out.println(num+" is even");
        }else{
            System.out.println(num+" is odd");
        }

        sc.close();
    
    }
}
