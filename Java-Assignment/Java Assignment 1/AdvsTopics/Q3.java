import java.io.*;

public class Q3 {
    public static void main(String[] args) {
        try {
            FileReader file = new FileReader("file.txt");
            BufferedReader br = new BufferedReader(file);
            String line;

            System.out.println("\nReading File Contents:");
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }

            br.close();
            file.close();
        } 
        catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}