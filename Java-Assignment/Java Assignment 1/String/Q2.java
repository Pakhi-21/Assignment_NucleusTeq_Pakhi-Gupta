import java.util.*;

public class Q2 {

    public static boolean isVowel(char ch){
        if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
            return true;
        }

        return false;
    }
    public static int countVowels(String str) {
        str = str.toLowerCase();
        int count = 0;

        for (char ch : str.toCharArray()) {
            if (isVowel(ch)) { 
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = sc.nextLine();

        System.out.println("Number of vowels: " + countVowels(input));
        
        sc.close();
    }
}
