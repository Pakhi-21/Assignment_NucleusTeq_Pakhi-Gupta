import java.util.Scanner;

public class Question1{
       public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);

        System.out.println("Enter the shape (circle, rectangle, triangle): ");
        String shape = sc.next().toLowerCase();

        switch (shape) {

            case "circle":
                System.out.print("Enter radius: ");
                double r = sc.nextDouble();
                double carea = Math.PI * r * r;
                System.out.println("Area of Circle: " + carea);
                break;

            case "rectangle":
                System.out.print("Enter length: ");
                double l = sc.nextDouble();
                System.out.print("Enter width: ");
                double w = sc.nextDouble();
                double rarea = l*w;
                System.out.println("Area of Rectangle: " + rarea);
                break;

            case "triangle":
                System.out.print("Enter base: ");
                double b = sc.nextDouble();
                System.out.print("Enter height: ");
                double h = sc.nextDouble();
                double tarea = 0.5 * b * h;
                System.out.println("Area of Triangle: " + tarea);
                break;

            default:
                System.out.println("Invalid shape!");
        }
        sc.close();
    }
}
