class BankAccount {
    private int balance;

    
    public BankAccount(int balance) {
        if (balance > 0) {
            this.balance = balance;
        } else {
            balance = 0;
        }
    }

    // Getter method
    public double getBalance() {
        return balance;
    }

    // Setter method 
    public void setBalance(int amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }

}

public class Q3 {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000);
        
        System.out.println("Initial Balance:" + account.getBalance());
        account.setBalance(500);
        System.out.println("Updated Balance:" + account.getBalance());
    }
}