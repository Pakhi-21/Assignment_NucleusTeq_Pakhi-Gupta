
class Task1 extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Task1 is running: " + i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                System.out.println("Task1 interrupted");
            }
        }
    }
}

// Another thread class
class Task2 extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Task2 is running: " + i);
            try {
                Thread.sleep(1500); 
            } catch (InterruptedException e) {
                System.out.println("Task2 interrupted");
            }
        }
    }
}

// Main class to execute threads
public class ThreadExample {
    public static void main(String[] args) {
        Task1 t1 = new Task1(); 
        Task2 t2 = new Task2(); 
        
        t1.start(); 
        t2.start(); 

        
        for (int i = 1; i <= 5; i++) {
            System.out.println("Main thread is running: " + i);
            try {
                Thread.sleep(2000); 
            } catch (InterruptedException e) {
                System.out.println("Main thread interrupted");
            }
        }
    }
}
