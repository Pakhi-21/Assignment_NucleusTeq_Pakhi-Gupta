
class MyTask implements Runnable {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + " - Count: " + i);
            try {
                Thread.sleep(500); 
            } catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
        }
    }
}

public class Q4 {
    public static void main(String[] args) {
        // Creating threads
        Thread thread1 = new Thread(new MyTask(), "Thread-1");
        Thread thread2 = new Thread(new MyTask(), "Thread-2");

        // Starting threads
        thread1.start();
        thread2.start();
    }
}
