import java.util.Arrays;
import java.util.Scanner;

public class Q3 {
    public static boolean anagrams(String str1, String str2) {
        str1=str1.trim();
        str2=str2.trim();
       
        if (str1.length() != str2.length()){
            return false;
        }

        char[] ch1 = str1.toCharArray();
        char[] ch2 = str2.toCharArray();

        Arrays.sort(ch1);
        Arrays.sort(ch2);

        return Arrays.equals(ch1, ch2);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first string: ");
        String str1 = sc.nextLine();
        
        System.out.print("Enter second string: ");
        String str2 = sc.nextLine();
        

        if(str1.length()==0 || str2.length()==0){
            System.out.println("Not valid string");
        }
        else if (anagrams(str1, str2)) {
            System.out.println(" Anagrams String");
        } else {
            System.out.println(" NOT Anagrams");
        }

        sc.close();
    }
}
