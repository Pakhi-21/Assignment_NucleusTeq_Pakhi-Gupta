
public class Q1{
    public static void main(String[] args) {
        
        int[] arr = {12,89,76,54,9,76,21,34,67};
        int n=arr.length;
        int sum = 0;
        
        for (int i = 0; i < n; i++) {
            sum += arr[i]; 
        }
        
        float avg = (float) sum / n;
        System.out.println("Average of the array elements: " + avg);
        
    }
}