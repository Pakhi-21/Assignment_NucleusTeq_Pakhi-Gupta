
public class Q2 {
    public static void main(String[] args) {
        int num1 = 34;
        int num2 = 65;
        int num3 = 12;
        
        int lar;
        if (num1 >= num2 && num1 >= num3) {
            lar = num1;
        } else if (num2 >= num1 && num2 >= num3) {
            lar = num2;
        } else {
            lar = num3;
        }

        System.out.println("The largest number is: " + lar);
        
        
    }
}