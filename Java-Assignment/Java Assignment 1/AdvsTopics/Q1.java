
interface Animal {
    void makeSound();
}

abstract class Vehicle {
    String brand;
    public Vehicle(String brand) {
        this.brand = brand;
    }

    abstract void startEngine();
    
    void stopEngine() {
        System.out.println(brand + " engine is stopped.");
    }
}


class Dog implements Animal {
    public void makeSound() {
        System.out.println("Dog barks...");
    }
}

class Car extends Vehicle {
    public Car(String brand) {
        super(brand);
    }

    @Override
    void startEngine() {
        System.out.println(brand + " car engine starts");
    }
}


public class Q1 {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.makeSound(); 

        Vehicle car = new Car("BMW");
        car.startEngine();  
        car.stopEngine();  
    } 
}
