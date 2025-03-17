
class Shape {
    
//   method overloading
    public void area(double r) {
        System.out.println("Circle Area: " + (Math.PI * r * r));
    }

    public void area(double l, double w) {
        System.out.println("Rectangle Area: " + (l * w));
    }

    public void display() {
        System.out.println("This is a shape.");
    }
}

// method overriding
class Circle extends Shape {
    double radius;

    public Circle(double r) {
        this.radius = r;
    }

    @Override
    public void display() {
        System.out.println("This is a Circle with radius: " + radius);
    }
}


// Main Class
public class Q2{
    public static void main(String[] args) {
        Shape shp = new Shape();
        shp.area(6); 
        shp.area(5, 10); 

        
        Shape cir = new Circle(9);
        cir.display();    
    
    }
}
