
public class Q2 {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;
        

        //optimized code
        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            for (int j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) { 
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break; 
        }
    }

    public static void main(String[] args) {
    
        int[] arr = {12,89,76,54,9,76,21,34,67};
        
        bubbleSort(arr);
        
        System.out.println("Sorted Array using Bubble sort:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        
    }
}
