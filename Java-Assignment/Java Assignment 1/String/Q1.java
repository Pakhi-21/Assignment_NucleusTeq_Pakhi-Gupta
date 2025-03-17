import java.util.*;

public class Q1 {
    public static String reverse(String str) {
        if(str.length()==0){
            return "";
        }

        char ch[]=str.toCharArray();
        int i=0;
        int j=ch.length-1;

        while(i<j){
            char temp=ch[i];
            ch[i]=ch[j];
            ch[j]=temp;
            i++;
            j--;
        }

        return new String(ch);

    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string : ");
        String input = sc.nextLine();

        if(reverse(input)==""){
            System.out.println("Empty String");
        }else{

        System.out.println("Reversed String: " + reverse(input));
        }
        
        sc.close();
    }
}
