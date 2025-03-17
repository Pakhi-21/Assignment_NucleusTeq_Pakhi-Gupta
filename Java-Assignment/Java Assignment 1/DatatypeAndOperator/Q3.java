// 3) Create a program to convert a temperature from Celsius to Fahrenheit and vice versa.
import java.util.*;
public class Q3 {

    public static double conversion(double temp,String type){

        if(type.equalsIgnoreCase("C")){
            return (temp*9/5)+32;
        }else{
            return (temp - 32) * 5 / 9;
        }
       
    }
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the temp: ");
        double temp= sc.nextDouble();

        System.out.println("Enter Conversion type celsius=C ,Fahrenheit=F:");
        String type=sc.next();
        
        double result = conversion(temp, type);
        System.out.println("Converted Temperature: " + result+" "+type);
        
        sc.close();
    }
    
}
